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

import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

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
    gdetails: any = {};

    placeReviews: IPlaceReviewListItem[];

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private placeSearchService: PlaceSearchService,
        private tagService: TagService,
        private dishSearchService: DishSearchService,
        private _mapsAPILoader: MapsAPILoader) { }

    ngOnInit() {

        this.sub = this.route.params.subscribe(
            params => {
                this.placeId = params['id'];

                this.loadData();
            })
    }

    loadData() {
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

                this.getGooglePlaceDetails(place.gId);
            });
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

    removePlaceReview(id: number) {
        this.placeSearchService.deletePlaceReview(id)
            .subscribe(result => {
                this.loadData();
            });
    }
}