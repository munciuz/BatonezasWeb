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


// import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: './place-search.component.html'
})

export class PlaceSearchComponent implements OnInit {
    dishFilter: { dishName: string, dishId: number } = { dishName: '', dishId: null };
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

    placeReviewList: IGroupedPlaceReviewListItem[];

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

                console.log(pageModel);
            });
    }

    onChange() {
        console.log(this.optionsModel);
    }

}