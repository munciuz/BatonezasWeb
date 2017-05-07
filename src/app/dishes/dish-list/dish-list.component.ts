import { Component, OnInit } from "@angular/core";

import { IDishListItem } from "./dish-list-item";
import { DishService } from "../dish.service";

@Component({
    moduleId: module.id,
    templateUrl: './dish-list.component.html',
    styleUrls: ['./dish-list.components.css']
})

export class DishListComponent implements OnInit {
    pageTitle: string = 'patiekalų\'ų sąrašas';
    
    errorMessage: string;
    showImage: boolean = true;
    dishList: IDishListItem[];

    constructor(private dishService: DishService) { }

    ngOnInit(): void {
        this.dishService.getDishList()
            .subscribe(dishes => this.dishList = dishes,
            error => this.errorMessage = <any>error);
    }
}