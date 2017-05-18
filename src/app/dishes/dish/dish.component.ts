import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IDish } from "./dish";
import { DishService } from "../dish.service";
import { TagService } from "../../tags/tag.service";
import { ITagListItem } from "../../tags/tag-list/tag-list-item";

import { Subscription } from "rxjs/Subscription";

// import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: './dish.component.html'
})

export class DishComponent implements OnInit {
    dishId: number;
    name: string = '';
    selectedTags: ITagListItem[] = [];
    allTags: ITagListItem[] = [];
    pageTitle: string = 'Patiekalo administravimas';
    dish: IDish;
    errorMessage: string;
    isValid: boolean = false;
    isConfirmed: boolean = false;
    result: any;

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: DishService,
        private tagService: TagService) { }

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
                            this.isConfirmed = this.dish.isConfirmed;
                            this.selectedTags = this.dish.selectedTags;
                            this.allTags = this.dish.allTags;
                        },
                        error => this.errorMessage = <any>error);
                } else {
                    this.tagService.getTagList()
                        .subscribe(tags => {
                            this.allTags = tags;
                        })
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
            isConfirmed: this.isConfirmed,
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

        if (!this.isTagSelected(tagId)){
            buttonClass += ' btn-outline';
        }

        return buttonClass;
    }

    tagToggled(tag: ITagListItem): void {
        console.log('tag toggled: ', tag);
        if (this.isTagSelected(tag.id)) {
            let index = this.tagIndex(tag.id);

            if (index > -1) {
                this.selectedTags.splice(index, 1);
            }
        } else {
            this.selectedTags.push(tag);
        }
    }

    tagIndex(tagId: number): number {
        for (var i = 0; i < this.selectedTags.length; i++){
            if (this.selectedTags[i].id === tagId){
                return i;
            }
        }

        return -1;
    }

    isTagSelected(tagId: number): boolean {
        for (var i = 0; i < this.selectedTags.length; i++){
            if (this.selectedTags[i].id === tagId){
                return true;
            }
        }

        return false;
    }
}