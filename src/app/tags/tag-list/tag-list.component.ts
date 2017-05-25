import { Component, OnInit } from "@angular/core";

import { ITagListItem } from "./tag-list-item";
import { TagService } from "../tag.service";

@Component({
    moduleId: module.id,
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.components.css']
})

export class TagListComponent implements OnInit {
    pageTitle: string = 'Žymės';
    
    errorMessage: string;
    showImage: boolean = true;
    tagList: ITagListItem[];

    constructor(private tagService: TagService) { }

    ngOnInit(): void {
        this.tagService.getFilteredTagList(true)
            .subscribe(dishTypes => this.tagList = dishTypes,
            error => this.errorMessage = <any>error);
    }
}