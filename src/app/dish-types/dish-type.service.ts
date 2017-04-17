import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IDishTypeListItem } from "./dish-type-list/dish-type-list-item";
import { IDishType } from "./dish-type/dish-type";

import { Apis } from "../shared/apis";

@Injectable()

export class DishTypeService {

    constructor(private http: Http, private apis: Apis) { }

    getDishTypeList(): Observable<IDishTypeListItem[]> {
        return this.http.get(this.apis.Dishtype.GetAll)
            .map((response: Response) => <IDishTypeListItem[]>response.json())
            .catch(this.handleError);
    }

    getDishType(id: number): Observable<IDishType> {
        return this.http.get(this.apis.Dishtype.Get + id)
            .map((response: Response) => <IDishType>response.json())
            .catch(this.handleError);
    }

    editDishType(dishType: IDishType): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 

        return this.http.post(this.apis.Dishtype.Edit, dishType, headers) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}