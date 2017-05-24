import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

// import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

import { TagService } from "../../tags/tag.service";
import { ITagListItem } from "../../tags/tag-list/tag-list-item";

import { Subscription } from "rxjs/Subscription";
import { ICity } from "../../shared/models/city";
import { IDishListItem } from "../../shared/models/dish-list-item";
import { IGroupedDishReviewListItem } from "../../shared/models/grouped-dish-review-list-item";

import { DishSearchService } from "../dish-search.service";

import * as _ from 'lodash';

import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

@Component({
    moduleId: module.id,
    templateUrl: './dish-search.component.html'
})

export class DishSearchComponent implements OnInit {
    dishFilter: string = '';
    placeFilter: string = '';
    cityFilter: ICity = { name: '', lat: null, lng: null };
    tagFilter: ITagListItem = null;
    vegetarianFilter: boolean = false;
    ratingFilter: number = null;
    gplace: any = null;

    optionsModel: number[];
    // myOptions: IMultiSelectOption[];

    dishReviewList: IGroupedDishReviewListItem[];
    filteredDishReviewList: IGroupedDishReviewListItem[];
    tagList: ITagListItem[];
    dishList: IDishListItem[];

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dishSearchService: DishSearchService,
        private tagService: TagService,
        private _mapsAPILoader: MapsAPILoader) { }

    newRow(index: number) {
        if (index % 4 === 0 || index === 0)
            return "row";

        return "";
    }

    ngOnInit() {
        this.dishSearchService.getDishSearchPageModel()
            .subscribe(pageModel => {
                this.dishReviewList = pageModel.dishReviewList;
                this.filteredDishReviewList = pageModel.dishReviewList;
                this.tagList = pageModel.tagList;
                this.dishList = pageModel.dishList;
            });

        this.dishSearchService.getTagList().subscribe(tags => {
            this.tagList = tags;
        })

        this._mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(document.getElementById("placeAutocomplete"), {});
            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                this.gplace = autocomplete.getPlace();
                console.log(this.gplace);

                this.applyFilters();
            });
        });
    }

    onChange() {
        console.log(this.optionsModel);
    }

    placeChanged() {
        if (this.placeFilter.length == 0) {
            this.gplace = null;

            this.applyFilters();
        }
    }

    getRatingDisplayName() {
        if (this.ratingFilter > 0) {
            return this.ratingFilter;
        } else {
            return 'Reitingas';
        }
    }

    setTag(tag: ITagListItem) {
        this.tagFilter = tag;

        this.applyFilters();
    }

    setRating(rating: number) {
        this.ratingFilter = rating;

        this.applyFilters();
    }

    applyFilters() {
        this.filteredDishReviewList = this.dishReviewList;

        this.applyPlaceFilter();
        this.applyTagFilter();
        this.applyRatingFilter();
        this.applyTagFilter();
        this.applyVegetarianFilter();

        // if (this.filteredDishReviewList.length > 40){
        //     this.filteredDishReviewList = this.filteredDishReviewList.slice(0, 40);
        // }
    }

    applyPlaceFilter() {
        let self = this;

        if (this.gplace) {
            let lat = this.gplace.geometry.location.lat();
            let lng = this.gplace.geometry.location.lng();

            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                let distance = self.getDistanceFromLatLonInKm(o.lat, o.lng, lat, lng);
                return distance < 5;
            });
        }
    }

    toggleVegetarian() {
        this.vegetarianFilter = !this.vegetarianFilter;

        this.applyFilters();
    }

    getTagDropdownDisplayName(){
        return this.tagFilter == null ? "Žymės" : this.tagFilter.name;
    }

    getVegetarianButtonClass(tagId: number): string {
        let buttonClass = this.vegetarianFilter ? 'btn-success' : 'btn-default';

        return buttonClass;
    }

    applyTagFilter() {
        if (this.tagFilter) {
            let self = this;
            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                
                for (var i = 0; i < o.tagsIds.length; i++) {
                    if (self.tagFilter.id == o.tagsIds[i]) {
                        return true;
                    }
                }

                return false;
            });
        }
    }

    applyRatingFilter() {
        if (this.ratingFilter) {
            let rating = this.ratingFilter;

            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                return o.ratingAverage >= rating;
            });
        }
    }

    applyVegetarianFilter() {
        if (this.vegetarianFilter) {
            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                return o.isVegetarian;
            });
        }
    }

    getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg: number) {
        return deg * (Math.PI / 180)
    }
}