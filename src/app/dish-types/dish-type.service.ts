import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IDishTypeListItem } from "./dish-type-list-item";

@Injectable()

export class DishTypeService {

    private dishTypeUrl: string = 'http://localhost/batonezasapi/dishtype/getall';

    constructor(private http: Http){}

    getDishTypeList() : Observable<IDishTypeListItem[]> {
        return this.http.get(this.dishTypeUrl)
            .map((response: Response) => <IDishTypeListItem[]> response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');

    }
}