import { Component, Injectable } from "@angular/core";
import { IDishTypeListItem } from "../shared/interfaces/dish-type/dish-type-list-item";

@Component({})
@Injectable()

export class DishTypeService {

    getDishTypeList() : IDishTypeListItem[] {
        let dishTypeList: IDishTypeListItem[] = [
        {
            Id: 1,
            Name: 'Dish Type 1',
            IsValid: true,
            TempImgUrl: 'http://www.saladworks.com/sites/default/files/Sandwich-AvocadoBLT.jpg'
        },
        {
            Id: 2,
            Name: 'Dish Type 2',
            IsValid: true,
            TempImgUrl: 'http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4150.png'
        },
        {
            Id: 3,
            Name: 'Dish Type 3',
            IsValid: true,
            TempImgUrl: 'http://indianhealthyrecipes.com/wp-content/uploads/2016/11/vegetable-curd-sandwich-recipe.jpg'
        }
    ];

    return dishTypeList;
    }
}