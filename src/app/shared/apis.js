"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Apis = (function () {
    function Apis() {
        this.baseUrl = 'http://localhost/batonezasapi/';
        // private baseUrl: string = 'http://munciuz-001-site1.etempurl.com/';
        this.dishType = 'dishType/';
        this.tag = 'tag/';
        this.dish = 'dish/';
        this.get = 'get/';
        this.getAll = 'getAll/';
        this.create = 'Create/';
        this.edit = 'edit/';
        this.delete = 'delete/';
        this.Dishtype = {
            Get: this.baseUrl + this.dishType + this.get,
            GetAll: this.baseUrl + this.dishType + this.getAll,
            Create: this.baseUrl + this.dishType + this.create,
            Edit: this.baseUrl + this.dishType + this.edit
        };
        this.Tag = {
            Get: this.baseUrl + this.tag + this.get,
            GetAll: this.baseUrl + this.tag + this.getAll,
            Create: this.baseUrl + this.tag + this.create,
            Edit: this.baseUrl + this.tag + this.edit
        };
        this.Dish = {
            Get: this.baseUrl + this.dish + this.get,
            GetAll: this.baseUrl + this.dish + this.getAll,
            Create: this.baseUrl + this.dish + this.create,
            Edit: this.baseUrl + this.dish + this.edit
        };
    }
    return Apis;
}());
Apis = __decorate([
    core_1.Injectable()
], Apis);
exports.Apis = Apis;
//# sourceMappingURL=apis.js.map