import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ITag } from "./tag";
import { TagService } from "../tag.service";

import { Subscription } from "rxjs/Subscription";

@Component({
    moduleId: module.id,
    templateUrl: './tag.component.html'
})

export class TagComponent implements OnInit {
    tagId: number
    pageTitle: string = 'Žymės administravimas';
    tag: ITag;
    errorMessage: string;
    name: string = '';
    isValid: boolean = false;
    result: any;

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TagService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                this.tagId = params['id'];

                if (this.tagId > 0) {
                    this.service.getTag(this.tagId)
                        .subscribe(tag => {
                            this.tag = tag;
                            this.name = this.tag.name;
                            this.isValid = this.tag.isValid;
                        },
                        error => this.errorMessage = <any>error);
                }
            }
        )
    }

    onBackClicked(): void {
        this.router.navigate(['/tags']);
    }

    onSave(): void {
        this.tag = {
            name: this.name,
            id: this.tagId,
            isValid: this.isValid
        }
        
        console.log(this.tag);

        if (this.tagId == 0) {
            this.service.createTag(this.tag).subscribe(tags => {
                this.result = tags;
                this.router.navigate(['/tags']);
            }, error => this.errorMessage = <any>error);
        } else {
            this.service.editTag(this.tag).subscribe(tags => {
                this.result = tags;
                this.router.navigate(['/tags']);
            }, error => this.errorMessage = <any>error);
        }
    }
}