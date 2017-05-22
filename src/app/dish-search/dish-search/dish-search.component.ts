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

// import * as _ from 'lodash';

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
    tagFilter: number[] = [];
    formedFilteredTagName: string = '';
    vegetarianFilter: boolean = false;
    ratingFilter: number = null;

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
    }

    onChange() {
        console.log(this.optionsModel);
    }

    placeChanged() {

        let self = this;

        this._mapsAPILoader.load().then(() => {
            let currentLocation = new google.maps.LatLng(54.9008465, 23.9609625);
            let map = new google.maps.Map(document.createElement('div'));
            let service = new google.maps.places.PlacesService(map);

            let request = {
                location: currentLocation,
                types: ['(cities)'],
                input: this.cityFilter
            };

            service.textSearch(request, function (results: any, status: any) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    console.log('god data from google ', results);
                } else {
                    console.log('got error from google ', status);
                }
            });
        });
    }

    getRatingDisplayName() {
        if (this.ratingFilter > 0) {
            return this.ratingFilter;
        } else {
            return 'Reitingas';
        }
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
    }

    applyPlaceFilter() {
    }

    applyTagFilter() {
    }

    applyRatingFilter() {
        if (this.ratingFilter) {
            let rating = this.ratingFilter;

            this.filteredDishReviewList = _.filter(this.filteredDishReviewList, function (o) {
                return o.ratingAverage >= rating;
            });
        }
    }
}