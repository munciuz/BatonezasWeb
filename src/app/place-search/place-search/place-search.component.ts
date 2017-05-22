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

import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: './place-search.component.html'
})

export class PlaceSearchComponent implements OnInit {
    cityFilter: ICity = { name: '', lat: null, lng: null };
    placeTypeFilter: number = null;
    ratingFilter: number = null;

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
        private tagService: TagService) { }

    ngOnInit() {
        this.placeSearchService.getPlaceReviewPageModel()
            .subscribe(pageModel => {
                this.placeReviewList = pageModel.groupedPlacesList;
                this.filteredPlaceReviewList = pageModel.groupedPlacesList;

                console.log(pageModel);
            });
    }

    onChange() {
        console.log(this.optionsModel);
    }

    getPlaceTypeName(){
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
        this.placeTypeFilter = placeTypeId
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
    }

    applyCityFilter() {
        let self = this;

        // if (this.cityFilter && this.cityFilter.lat && this.cityFilter.lng) {
        //     this.filteredPlaceReviewList = _.filter(this.filteredPlaceReviewList, function (o) {
        //         let distance = self.getDistanceFromLatLonInKm(o.lat, o.lng, self.cityFilter.lat, self.cityFilter.lng);

        //         console.log(o.placeName + ' ' + self.cityFilter.name + ' ' + distance);

        //         return distance < 5;
        //     });
        // }
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
}