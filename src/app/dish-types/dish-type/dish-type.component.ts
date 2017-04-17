import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IDishType } from "./dish-type";
import { DishTypeService } from "../dish-type.service";

import { Subscription } from "rxjs/Subscription";

@Component({
    moduleId: module.id,
    templateUrl: './dish-type.component.html'
})

export class DishTypeComponent implements OnInit {
    pageTitle: string = 'Edit';
    dishType: IDishType;
    errorMessage: string;
    name: string = '';
    isValid: boolean = false;
    result: any;

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: DishTypeService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                let id: number = params['id'];
                
                this.service.getDishType(id)
                    .subscribe(dishType => {
                        this.dishType = dishType;
                        this.name = this.dishType.name;
                        this.isValid = this.dishType.isValid;
                    },
                    error => this.errorMessage = <any>error);
            }
        )
    }

    onBackClicked(): void {
        this.router.navigate(['/dishTypes']);
    }

    onSave(): void {
        this.dishType.name = this.name;
        this.isValid = this.isValid;
        
        this.service.editDishType(this.dishType).subscribe(dishTypes => this.result = dishTypes,
            error => this.errorMessage = <any>error);
    }
}