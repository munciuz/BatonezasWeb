import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TagListComponent } from './tag-list/tag-list.component';
import { TagComponent } from './tag/tag.component'
import { TagService } from "./tag.service";
import { Apis } from "../shared/apis";

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        TagListComponent,
        TagComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'tags', component: TagListComponent },
            { path: 'tag/:id', component: TagComponent }
        ])],
    providers: [ TagService, Apis]
})

export class TagModule {

}