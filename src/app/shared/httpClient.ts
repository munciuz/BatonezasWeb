import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AuthenticationService } from "./authentication.service";

@Injectable()
export class HttpClient {

    constructor(private http: Http,
        private authenticationService: AuthenticationService) { }

    createAuthorizationHeader(headers: Headers) {
        let token = this.authenticationService.GetToken();

        if (token && token.length > 0) {
            headers.append('Authorization', "Bearer " + token);
        }
    }

    get(url: string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url: string, data: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }

    delete(url: string, id: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers);
        return this.http.delete(url, id);
    }
}