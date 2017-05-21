import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { StarComponent } from "./star.component";
import { ApiBase } from "./api-base";
import { WorkHoursComponent } from "./components/work-hours.component";

@NgModule({
    declarations: [ StarComponent, WorkHoursComponent ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        WorkHoursComponent
    ]
})

export class SharedModule {}