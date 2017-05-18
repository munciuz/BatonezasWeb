import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component'
import { RegistrationComponent } from './registration/registration.component'
import { UserService } from "./user.service";
import { RoleService } from "./role.service";
import { Apis } from "../shared/apis";

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        UserListComponent,
        UserComponent,
        RegistrationComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'users', component: UserListComponent },
            { path: 'user/:id', component: UserComponent },
            { path: 'registration', component: RegistrationComponent }
        ])],
    providers: [ UserService, RoleService, Apis]
})

export class UserModule {

}