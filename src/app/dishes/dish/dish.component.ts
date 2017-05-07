import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IDish } from "./dish";
import { DishService } from "../dish.service";
import { ITag } from "../../tags/tag/tag";

import { Subscription } from "rxjs/Subscription";

// import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: './dish.component.html'
})

export class DishComponent implements OnInit {
    dishId: number;
    name: string = '';
    selectedTags: ITag[] = [];
    allTags: ITag[] = [];
    pageTitle: string = 'Edit';
    dish: IDish;
    errorMessage: string;
    isValid: boolean = false;
    result: any;

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: DishService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                this.dishId = params['id'];

                if (this.dishId > 0) {
                    this.service.getDish(this.dishId)
                        .subscribe(dish => {
                            this.dish = dish;
                            this.name = this.dish.name;
                            this.isValid = this.dish.isValid;
                            this.selectedTags = this.dish.selectedTags;
                            this.allTags = this.dish.allTags;

                            console.log(dish);
                        },
                        error => this.errorMessage = <any>error);
                }
            }
        )
    }

    onBackClicked(): void {
        this.router.navigate(['/dishes']);
    }

    onSave(): void {
        this.dish = {
            name: this.name,
            id: this.dishId,
            isValid: this.isValid,
            selectedTags: this.selectedTags,
            allTags: null
        }
        
        console.log("on save dish: ", this.dish);

        if (this.dishId == 0) {
            this.service.createDish(this.dish).subscribe(dishId => {
                this.result = dishId;
                this.router.navigate(['/dishes']);
            }, error => this.errorMessage = <any>error);
        } else {
            this.service.editDish(this.dish).subscribe(dishId => {
                this.result = dishId;
                this.router.navigate(['/dishes']);
            }, error => this.errorMessage = <any>error);
        }
    }

    getTagButtonClass(tagId: number): string {
        let buttonClass = 'btn btn-success';

        return buttonClass;
    }
}