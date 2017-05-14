"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var authentication_service_1 = require("./authentication.service");
var HttpClient = (function () {
    function HttpClient(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    HttpClient.prototype.createAuthorizationHeader = function (headers) {
        var token = this.authenticationService.GetToken();
        if (token && token.length > 0) {
            headers.append('Authorization', "Bearer " + token);
        }
    };
    HttpClient.prototype.get = function (url) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    HttpClient.prototype.post = function (url, data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    return HttpClient;
}());
HttpClient = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        authentication_service_1.AuthenticationService])
], HttpClient);
exports.HttpClient = HttpClient;
//# sourceMappingURL=httpClient.js.map