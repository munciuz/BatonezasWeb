import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import { LocalStorage } from "angular2-localstorage/WebStorage";

import { Observable } from 'rxjs/Observable';

import { Apis } from "./apis";
// import { IUserProfile } from "../models/user/userProfile";

@Injectable()

export class AuthenticationService {

    token: string = '';
    username: string = '';
    roleId: number;

    constructor(private http: Http, private apis: Apis) { }

    Reset() {
        this.RemoveLocalStorage('token');
        this.RemoveLocalStorage('username');
        this.RemoveLocalStorage('roleId');
    }

    IsAdmin() {
        if (this.roleId && this.roleId == 1)
            return true;
        else return false;
    }

    SetToken(token: string) {
        this.SetLocalStorage('token', token);
    }

    SetUsername(username: string) {
        this.SetLocalStorage('username', username);
    }

    SetRole(roleId: number) {
        this.SetLocalStorage('roleId', roleId);
    }

    GetToken() {
        return this.GetLocalStorage('token');
    }

    GetUsername() {
        return this.GetLocalStorage('username');
    }

    GetRole() {
        return this.GetLocalStorage('roleId');
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

    private SetLocalStorage(key: string, value: any) {
        window.localStorage.setItem(key, value);
    }

    private GetLocalStorage(key: string) {
        return window.localStorage.getItem(key);
    }

    private RemoveLocalStorage(key: string) {
        window.localStorage.removeItem(key);
    }
}   