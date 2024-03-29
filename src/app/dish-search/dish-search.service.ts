import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { ICity } from "../shared/models/city";
import { IDishListItem } from "../shared/models/dish-list-item";
import { IGroupedDishReviewListItem } from "../shared/models/grouped-dish-review-list-item";
import { IDishSearchPageModel } from "../shared/models/dish-search-page-model";
import { IDishReviewListItem } from "../shared/models/dish-review-list-item";
import { IPlace } from "../shared/models/place";
import { ITagListItem } from "../tags/tag-list/tag-list-item";

import { Apis } from "../shared/apis";
import { HttpClient } from "../shared/httpClient";

@Injectable()

export class DishSearchService {

    constructor(private http: Http, private apis: Apis, private httpClient: HttpClient) { }

    getDishSearchPageModel(): Observable<IDishSearchPageModel> {
        return this.httpClient.get(this.apis.DishReview.GetPageModel)
            .map((response: Response) => <IDishSearchPageModel>response.json());
    }

    getDishReviews(dishId: number, placeId: number): Observable<IDishReviewListItem[]> {
        var url = this.apis.DishReview.GetAll + '?dishId=' + dishId + '&placeId=' + placeId;

        return this.httpClient.get(url)
            .map((response: Response) => <IDishReviewListItem[]>response.json());
    }

    getDishReview(id: number): Observable<any> {
        return this.httpClient.get(this.apis.DishReview.Get + id)
            .map((response: Response) => <any>response.json());
    }

    getPlace(id: number): Observable<IPlace> {
        return this.httpClient.get(this.apis.Place.Get + id)
            .map((response: Response) => <IPlace>response.json());
    }

    getTagList(): Observable<ITagListItem[]> {
        return this.httpClient.get(this.apis.Tag.GetAll)
            .map((response: Response) => <ITagListItem[]>response.json());
    }

    deleteDishReview(id: number){
        return this.httpClient.delete(this.apis.DishReview.Delete + id, id)
            .map((response: Response) => response.json());
    }
}   