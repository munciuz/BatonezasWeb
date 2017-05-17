import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { ICity } from "../shared/models/city";
import { IPlaceReviewPageModel } from "../shared/models/place-review-page-model";
import { IPlaceReview } from "../shared/models/place-review";
import { IPlaceReviewListItem } from "../shared/models/place-review-list-item";
import { IPlace } from "../shared/models/place";

import { Apis } from "../shared/apis";
import { HttpClient } from "../shared/httpClient";

@Injectable()

export class PlaceSearchService {

    constructor(private http: Http, private apis: Apis, private httpClient: HttpClient) { }

    getPlaceReviewPageModel(): Observable<IPlaceReviewPageModel> {
        return this.httpClient.get(this.apis.PlaceReview.GetPageModel)
            .map((response: Response) => <IPlaceReviewPageModel>response.json());
    }

    createPlaceReview(placeReview: IPlaceReview): Observable<any> {
        return this.httpClient.post(this.apis.PlaceReview.Create, placeReview)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPlaceReviews(placeId: number): Observable<IPlaceReviewListItem[]> {
        var url = this.apis.PlaceReview.GetReviews + '?placeId=' + placeId;

        return this.httpClient.get(url)
            .map((response: Response) => <IPlaceReviewListItem[]>response.json());
    }
}   