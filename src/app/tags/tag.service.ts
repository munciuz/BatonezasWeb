import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ITagListItem } from "./tag-list/tag-list-item";
import { ITag } from "./tag/tag";

import { Apis } from "../shared/apis";
import { HttpClient } from "../shared/httpClient";

@Injectable()

export class TagService {

    constructor(private http: HttpClient, private apis: Apis) { }

    getTagList(): Observable<ITagListItem[]> {
        return this.http.get(this.apis.Tag.GetAll)
            .map((response: Response) => <ITagListItem[]>response.json())
            .catch(this.handleError);
    }

    getFilteredTagList(includeInvalid: boolean): Observable<ITagListItem[]> {
        var url = this.apis.Tag.GetAll;

        // if (includeInvalid){
            url += "?includeInvalid=true";
        // }

        return this.http.get(url)
            .map((response: Response) => <ITagListItem[]>response.json())
            .catch(this.handleError);
    }

    getTag(id: number): Observable<ITag> {
        return this.http.get(this.apis.Tag.Get + id)
            .map((response: Response) => <ITag>response.json())
            .catch(this.handleError);
    }

    createTag(tag: ITag): Observable<any> {
        return this.http.post(this.apis.Tag.Create, tag) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }

    editTag(tag: ITag): Observable<any> {
        return this.http.post(this.apis.Tag.Edit, tag) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}