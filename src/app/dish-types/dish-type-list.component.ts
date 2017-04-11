import { Component, OnInit } from "@angular/core";

import { IDishTypeListItem } from "../shared/interfaces/dish-type/dish-type-list-item";
import { DishTypeService } from "./dish-type.service";

@Component({
    moduleId: module.id,
    selector: 'bat-dish-type-list',
    templateUrl: './dish-type-list.component.html',
    styleUrls: ['./dish-type-list.components.css']
})

export class DishTypeListComponent implements OnInit {
    pageTitle: string = 'Dish Type List';
    filter: string = '';
    errorMessage: string;
    showImage: boolean = true;
    dishTypes: IDishTypeListItem[];

    constructor(private dishTypeService: DishTypeService) { }

    ngOnInit(): void {
        this.dishTypeService.getDishTypeList()
            .subscribe(dishTypes => this.dishTypes = dishTypes,
            error => this.errorMessage = <any>error);
    }

    toggleShowImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        console.log(message);
    }
}