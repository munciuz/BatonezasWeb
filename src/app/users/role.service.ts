import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IRole } from "./user/role";

import { Apis } from "../shared/apis";

@Injectable()

export class RoleService {

    constructor(private http: Http, private apis: Apis) { }

    getRoleList(): Observable<IRole[]> {
        return this.http.get(this.apis.User.GetAll)
            .map((response: Response) => <IRole[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}