import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

// import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

import { TagService } from "../../tags/tag.service";
import { ITagListItem } from "../../tags/tag-list/tag-list-item";

import { Subscription } from "rxjs/Subscription";
import { ICity } from "../../shared/models/city";
import { IDishListItem } from "../../shared/models/dish-list-item";
import { IGroupedDishReviewListItem } from "../../shared/models/grouped-dish-review-list-item";

import { PlaceSearchService } from "../place-search.service";
import { IGroupedPlaceReviewListItem } from "../../shared/models/grouped-place-review-list-item";

import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: './place-search.component.html'
})

export class PlaceSearchComponent implements OnInit {
    cityFilter: ICity = { name: '', lat: null, lng: null };
    placeFilter: string = '';
    placeTypeFilter: number = null;
    ratingFilter: number = null;
    gplace: any = null;

    optionsModel: number[];
    // myOptions: IMultiSelectOption[];

    dishReviewList: IGroupedDishReviewListItem[];
    filteredDishReviewList: IGroupedDishReviewListItem[];
    tagList: ITagListItem[];
    dishList: IDishListItem[];

    placeReviewList: IGroupedPlaceReviewListItem[];
    filteredPlaceReviewList: IGroupedPlaceReviewListItem[];

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private placeSearchService: PlaceSearchService,
        private tagService: TagService,
        private _mapsAPILoader: MapsAPILoader) { }

    ngOnInit() {
        this.placeSearchService.getPlaceReviewPageModel()
            .subscribe(pageModel => {
                this.placeReviewList = pageModel.groupedPlacesList;
                this.filteredPlaceReviewList = pageModel.groupedPlacesList;

                console.log(pageModel);
            });

            this._mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(document.getElementById("placeAutocomplete"), {});
            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                this.gplace = autocomplete.getPlace();
                console.log(this.gplace);

                this.applyFilters();
            });
        });
    }

    placeChanged() {
        if (this.placeFilter.length == 0) {
            this.gplace = null;

            this.applyFilters();
        }
    }

    onChange() {
        console.log(this.optionsModel);
    }

    getPlaceTypeName(){
        console.log('place type id is ', this.placeTypeFilter);

        switch(this.placeTypeFilter){
            case 1: return 'Restoranas';
            case 2: return 'Kavinė';
            case 3: return 'Baras';
            case 4: return 'Kepyklėlė';
            case 5: return 'Į namus';
            case 6: return 'Išsinešimui';
            case 7: return 'Naktinis klubas';
            default: return 'Tipas';
        }
    }

    getRatingDisplayName(){
        if (this.ratingFilter > 0){
            return this.ratingFilter;
        } else {
            return 'Reitingas';
        }
    }

    setPlaceType(placeTypeId: number){
        this.placeTypeFilter = placeTypeId;

        this.applyFilters();
    }

    setRating(rating: number) {
        this.ratingFilter = rating;

        this.applyFilters();
    }

    applyFilters() {
        this.filteredPlaceReviewList = this.placeReviewList;

        this.applyCityFilter();
        this.applyTypeFilter();
        this.applyRatingFilter();

        // if (this.filteredPlaceReviewList.length > 40){
        //     this.filteredPlaceReviewList = this.filteredPlaceReviewList.slice(0, 40);
        // }
    }

    applyCityFilter() {
        let self = this;

        if (this.gplace) {
            let lat = this.gplace.geometry.location.lat();
            let lng = this.gplace.geometry.location.lng();

            this.filteredPlaceReviewList = _.filter(this.filteredPlaceReviewList, function (o) {
                let distance = self.getDistanceFromLatLonInKm(o.lat, o.lng, lat, lng);
                return distance < 5;
            });
        }
    }

    applyTypeFilter() {
        let self = this;

        if (this.placeTypeFilter) {
            let typeId = this.placeTypeFilter;

            this.filteredPlaceReviewList = _.filter(this.filteredPlaceReviewList, function (o) {
                for (var i = 0; i < o.placeTypeIds.length; i++) {
                    console.log(o.placeTypeIds[i] + ' == ' + typeId);
                    if (o.placeTypeIds[i] == typeId) {
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

            this.filteredPlaceReviewList = _.filter(this.filteredPlaceReviewList, function (o) {
                return o.ratingAverage >= rating;
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