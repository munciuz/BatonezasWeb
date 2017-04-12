import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IDishTypeListItem } from "./dish-type-list-item";

import { Subscription } from "rxjs/Subscription";

@Component({
    moduleId: module.id,
    templateUrl: './dish-type-detail.component.html'
})

export class DishTypeDetailComponent implements OnInit{
    pageTitle: string = 'Dish Type Detail';
    dishType: IDishTypeListItem;
    id: number;
    private sub: Subscription

    constructor(private route: ActivatedRoute, private router: Router){}

    ngOnInit(){
        this.sub = this.route.params.subscribe(
            params => {
                this.id = +params['id'];
            }
        )
    }

    onBackClicked(): void{
        this.router.navigate(['/dishTypes']);
    }
}