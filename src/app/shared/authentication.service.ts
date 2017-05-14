import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Apis } from "./apis";
// import { IUserProfile } from "../models/user/userProfile";

@Injectable()

export class AuthenticationService {

    token: string = '';
    username: string = '';
    roleId: number;

    constructor(private http: Http, private apis: Apis) { }

    GetToken(){
        return this.token;
    }

    ResetToken(){
        this.token = '';
    }

    SetToken(token: string) {
        this.token = token;
    }

    Login(userData: any): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apis.User.Login, 
            "userName=" + encodeURIComponent(userData.username) +
            "&password=" + encodeURIComponent(userData.password) +
            "&grant_type=password", headers)
            .map((res: Response) => 
                res.json())
            .catch((error: any) => Observable.throw(error));

        // return this.http.post(this.apis.User.Login, user, headers)
        //     .map((res: Response) => res.json())
        //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}   