import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TagService } from "../../tags/tag.service";
import { DishSearchService } from "../../dish-search/dish-search.service";
import { ITagListItem } from "../../tags/tag-list/tag-list-item";

import { Subscription } from "rxjs/Subscription";
import { ICity } from "../../shared/models/city";
import { IDishListItem } from "../../shared/models/dish-list-item";
import { IGroupedDishReviewListItem } from "../../shared/models/grouped-dish-review-list-item";
import { IDishReviewListItem } from "../../shared/models/dish-review-list-item";
import { IPlaceReviewListItem } from "../../shared/models/place-review-list-item";

import { PlaceSearchService } from "../place-search.service";

@Component({
    moduleId: module.id,
    templateUrl: './place-reviews.component.html'
})

export class PlaceReviewComponent implements OnInit {
    dishId: number;
    placeId: number;
    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;

    placeReviews: IPlaceReviewListItem[];

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private placeSearchService: PlaceSearchService,
        private tagService: TagService,
        private dishSearchService: DishSearchService) { }

    ngOnInit() {

        this.sub = this.route.params.subscribe(
            params => {
                this.placeId = params['id'];

                this.placeSearchService.getPlaceReviews(this.placeId)
                    .subscribe(placeReviews => {
                        console.log('got reviews', placeReviews);
                        this.placeReviews = placeReviews;
                    });

                this.dishSearchService.getPlace(this.placeId)
                    .subscribe(place => {
                        this.lat = +place.lat;
                        this.lng = +place.lng;
                        this.title = place.name;
                    });
            })
    }
}