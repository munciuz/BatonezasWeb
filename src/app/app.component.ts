import { Component } from '@angular/core';
import { DishTypeService } from "./dish-types/dish-type.service";

@Component({
    selector: 'bat-app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    providers: [DishTypeService]
})
export class AppComponent { 
    randomTitle: string = "Batonezas";
}
