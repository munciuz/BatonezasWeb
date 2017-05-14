import { Injectable } from "@angular/core";

@Injectable()

export class Apis {
    // private baseUrl: string = 'http://localhost/batonezasapi/';
    private baseUrl: string = 'http://munciuz-001-site1.etempurl.com/';
    private dishType: string = 'dishType/';
    private tag: string = 'tag/';
    private dish: string = 'dish/';
    private user: string = 'user/';
    private role: string = 'role/';
    private dishReview: string = 'dishReview/';

    private get: string = 'get/';
    private getAll: string = 'getAll/';
    private getPageModel: string = 'getPageModel/';
    private create: string = 'Create/';
    private edit: string = 'edit/';
    private delete: string = 'delete/';

    public Dishtype = {
        Get: this.baseUrl + this.dishType + this.get,
        GetAll: this.baseUrl + this.dishType + this.getAll,
        Create: this.baseUrl + this.dishType + this.create,
        Edit: this.baseUrl + this.dishType + this.edit
    };

    public DishReview = {
        Get: this.baseUrl + this.dishReview + this.get,
        GetAll: this.baseUrl + this.dishReview + this.getAll,
        GetPageModel: this.baseUrl + this.dishReview + this.getPageModel,
        Create: this.baseUrl + this.dishReview + this.create,
        Edit: this.baseUrl + this.dishReview + this.edit
    };

    public Tag = {
        Get: this.baseUrl + this.tag + this.get,
        GetAll: this.baseUrl + this.tag + this.getAll,
        Create: this.baseUrl + this.tag + this.create,
        Edit: this.baseUrl + this.tag + this.edit
    };

    public Dish = {
        Get: this.baseUrl + this.dish + this.get,
        GetAll: this.baseUrl + this.dish + this.getAll,
        Create: this.baseUrl + this.dish + this.create,
        Edit: this.baseUrl + this.dish + this.edit
    };

    public User = {
        Get: this.baseUrl + this.user + this.get,
        GetAll: this.baseUrl + this.user + this.getAll,
        Create: this.baseUrl + this.user + this.create,
        Edit: this.baseUrl + this.user + this.edit,
        Login: this.baseUrl + "oauth2/token",
        UserProfile: this.baseUrl + this.user + "GetUserProfile",
        EditProfile: this.baseUrl + this.user + "EditUserProfile"
    };

    public Role = {
        GetAll: this.baseUrl + this.role + this.getAll
    };
}