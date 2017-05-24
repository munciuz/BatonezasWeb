import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IDishListItem } from "./dish-list/dish-list-item";
import { IDish } from "./dish/dish";

import { Apis } from "../shared/apis";
import { HttpClient } from "../shared/httpClient";

@Injectable()

export class DishService {

    constructor(private http: HttpClient, private apis: Apis) { }

    getDishList(): Observable<IDishListItem[]> {
        return this.http.get(this.apis.Dish.GetAll)
            .map((response: Response) => <IDishListItem[]>response.json())
            .catch(this.handleError);
    }

    getDish(id: number): Observable<IDish> {
        return this.http.get(this.apis.Dish.Get + id)
            .map((response: Response) => <IDish>response.json())
            .catch(this.handleError);
    }

    createDish(dish: IDish): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 

        return this.http.post(this.apis.Dish.Create, dish) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }

    editDish(dish: IDish): Observable<any> {
        console.log('this is dish service before editing data: ', dish);
        return this.http.post(this.apis.Dish.Edit, dish) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            }); 
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}