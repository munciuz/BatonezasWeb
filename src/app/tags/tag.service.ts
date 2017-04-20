import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ITagListItem } from "./tag-list/tag-list-item";
import { ITag } from "./tag/tag";

import { Apis } from "../shared/apis";

@Injectable()

export class TagService {

    constructor(private http: Http, private apis: Apis) { }

    getTagList(): Observable<ITagListItem[]> {
        return this.http.get(this.apis.Tag.GetAll)
            .map((response: Response) => <ITagListItem[]>response.json())
            .catch(this.handleError);
    }

    getTag(id: number): Observable<ITag> {
        return this.http.get(this.apis.Tag.Get + id)
            .map((response: Response) => <ITag>response.json())
            .catch(this.handleError);
    }

    createTag(tag: ITag): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 

        return this.http.post(this.apis.Tag.Create, tag, headers) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }

    editTag(dishType: ITag): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 

        return this.http.post(this.apis.Tag.Edit, dishType, headers) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}