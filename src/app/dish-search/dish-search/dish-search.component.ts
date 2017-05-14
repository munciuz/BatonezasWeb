import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TagService } from "../../tags/tag.service";
import { ITagListItem } from "../../tags/tag-list/tag-list-item";

import { Subscription } from "rxjs/Subscription";
import { ICity } from "../../shared/models/city";
import { IDishListItem } from "../../shared/models/dish-list-item";
import { IGroupedDishReviewListItem } from "../../shared/models/grouped-dish-review-list-item";

import { DishSearchService } from "../dish-search.service";

// import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: './dish-search.component.html'
})

export class DishSearchComponent implements OnInit {
    dishFilter: { dishName: string, dishId: number } = { dishName: '', dishId: null };
    cityFilter: ICity = { name: '', lat: null, lng: null };
    tagFilter: number[] = [];
    formedFilteredTagName: string = '';
    vegetarianFilter: boolean = false;
    ratingFilter: number = null;

    dishReviewList: IGroupedDishReviewListItem[];
    filteredDishReviewList: IGroupedDishReviewListItem[];
    tagList: ITagListItem[];
    dishList: IDishListItem[];

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dishSearchService: DishSearchService,
        private tagService: TagService) { }

    ngOnInit() {

        this.dishSearchService.getDishSearchPageModel()
            .subscribe(pageModel => {
                this.dishReviewList = pageModel.dishReviewList;
                this.filteredDishReviewList = pageModel.dishReviewList;
                this.tagList = pageModel.tagList;
                this.dishList = pageModel.dishList;

                console.log('got grouped dish reviews: ', pageModel);
            });
    }
}