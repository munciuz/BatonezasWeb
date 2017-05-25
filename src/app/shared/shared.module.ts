import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { StarComponent } from "./star.component";
import { ApiBase } from "./api-base";
import { WorkHoursComponent } from "./components/work-hours.component";

import { CeiboShare } from 'ng2-social-share';

@NgModule({
    declarations: [ StarComponent, WorkHoursComponent, CeiboShare ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        WorkHoursComponent,
        CeiboShare
    ]
})

export class SharedModule {}