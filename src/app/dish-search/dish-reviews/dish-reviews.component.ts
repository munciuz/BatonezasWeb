import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TagService } from "../../tags/tag.service";
import { ITagListItem } from "../../tags/tag-list/tag-list-item";

import { Subscription } from "rxjs/Subscription";
import { ICity } from "../../shared/models/city";
import { IDishListItem } from "../../shared/models/dish-list-item";
import { IGroupedDishReviewListItem } from "../../shared/models/grouped-dish-review-list-item";
import { IDishReviewListItem } from "../../shared/models/dish-review-list-item";

import { DishSearchService } from "../dish-search.service";

@Component({
    moduleId: module.id,
    templateUrl: './dish-reviews.component.html'
})

export class DishReviewComponent implements OnInit {
    dishId: number;
    placeId: number;
    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;

    dishReviews: IDishReviewListItem[];

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dishSearchService: DishSearchService,
        private tagService: TagService) { }

    ngOnInit() {

        this.sub = this.route.params.subscribe(
            params => {
                this.dishId = params['dishId'];
                this.placeId = params['placeId'];

                this.dishSearchService.getDishReviews(this.dishId, this.placeId)
                    .subscribe(dishReviews => {
                        console.log(dishReviews);
                        this.dishReviews = dishReviews;
                    });

                this.dishSearchService.getPlace(this.placeId)
                    .subscribe(place => {
                        this.lat = +place.lat;
                        this.lng = +place.lng;
                        this.title = place.name;
                    });
            }
        )
    }
}