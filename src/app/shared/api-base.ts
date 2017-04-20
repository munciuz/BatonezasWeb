import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";

@Injectable()

export class ApiBase {

    GetHeaders(): Headers {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return headers;
    }
}