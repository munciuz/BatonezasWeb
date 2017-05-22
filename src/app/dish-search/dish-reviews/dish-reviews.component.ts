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

import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

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
    gdetails: any = {};

    dishName: string = '';

    dishReviews: IDishReviewListItem[];

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dishSearchService: DishSearchService,
        private tagService: TagService,
        private _mapsAPILoader: MapsAPILoader) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                this.dishId = params['dishId'];
                this.placeId = params['placeId'];

                this.dishSearchService.getDishReviews(this.dishId, this.placeId)
                    .subscribe(dishReviews => {
                        this.dishReviews = dishReviews;
                        this.dishName = dishReviews[0].name;
                    });

                this.dishSearchService.getPlace(this.placeId)
                    .subscribe(place => {
                        this.lat = +place.lat;
                        this.lng = +place.lng;
                        this.title = place.name;
                        console.log(place.gId);

                        this.getGooglePlaceDetails(place.gId);
                    });
            }
        )
    }

    getGooglePlaceDetails(gid: string) {
        this._mapsAPILoader.load().then(() => {
            console.log(google);
            let map = new google.maps.Map(document.createElement('div'));
            let placesService = new google.maps.places.PlacesService(map);

            /* Get place details */
            placesService.getDetails({
                placeId: gid
            }, (placeResult: any, status: any) => {
                if (status === 'OK') {
                    this.gdetails = placeResult;
                    console.log('got result ', placeResult);
                } else {
                    console.log('got some errors: ', status);
                }
            });
            // Place your code in here...
        });
    }

    formatWebsite(website: string): string {
        if (website && website.length > 0) {
            website = website.replace('http://', '');
            website = website.replace('https://', '');
            website = website.replace(/\/$/, '');
        }

        return website;
    }

    removeDishReview(id: number){
        console.log('removing dish review w/ id ', id);
    }
}