import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUserListItem } from "./user-list/user-list-item";
import { IUser } from "./user/user";
import { IUserProfile } from "../shared/models/user-profile";

import { Apis } from "../shared/apis";
import { HttpClient } from "../shared/httpClient";

@Injectable()

export class UserService {

    constructor(private http: Http, private apis: Apis, private httpClient: HttpClient) { }

    getUserList(): Observable<IUserListItem[]> {
        return this.http.get(this.apis.User.GetAll)
            .map((response: Response) => <IUserListItem[]>response.json())
            .catch(this.handleError);
    }

    getUser(id: number): Observable<IUser> {
        return this.http.get(this.apis.User.Get + id)
            .map((response: Response) => <IUser>response.json())
            .catch(this.handleError);
    }

    createUser(dish: IUser): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 

        return this.http.post(this.apis.User.Create, dish, headers) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }

    editUser(dish: IUser): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 

        return this.http.post(this.apis.User.Edit, dish, headers) 
            .map((res: Response) => res.json()) 
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }

    getProfileData(): Observable<IUserProfile> {
        return this.httpClient.get(this.apis.User.UserProfile)
            .map((response: Response) => <IUserProfile>response.json());
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}