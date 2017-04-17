import { Injectable } from "@angular/core";

@Injectable()

export class Apis {
    private baseUrl: string = 'http://localhost/batonezasapi/';
    private dishType: string = 'dishType/';

    private get: string = 'get/';
    private getAll: string = 'getAll/';
    private create: string = '/Create';
    private edit: string = 'edit/';
    private delete: string = 'delete';

    public Dishtype = {
        Get: this.baseUrl + this.dishType + this.get,
        GetAll: this.baseUrl + this.dishType + this.getAll,
        Create: this.baseUrl + this.dishType + this.create,
        Edit: this.baseUrl + this.dishType + this.edit
    };
}