import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
    declarations: [WelcomeComponent],
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'dishSearch', pathMatch: 'full' },
            { path: '**', redirectTo: 'dishSearch', pathMatch: 'full' }
        ])],
    exports: [RouterModule]
})

export class AppRoutingModule { }