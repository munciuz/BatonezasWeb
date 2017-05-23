import { Component } from '@angular/core';
import { DishTypeService } from "./dish-types/dish-type.service";
import { AuthenticationService } from "./shared/authentication.service";
import { UserService } from "./users/user.service";

@Component({
    selector: 'bat-app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    providers: [DishTypeService]
})
export class AppComponent {
    randomTitle: string = "Batonezas";

    username: string;
    password: string;
    roleId: number;
    error: string;
    logedIn: boolean = false;
    errors: string = '';

    constructor(private authenticationService: AuthenticationService, private userService: UserService) {

    }

    ngOnInit(): void {
        this.userService.getProfileData().subscribe(result => {
            this.username = result.username;
            this.logedIn = true;
            this.roleId = result.roleId;

            this.authenticationService.SetRole(result.roleId);
        },
            error => {
                console.log('gavom va toki errora', error);
            });
    }

    isAdmin(){
        return this.roleId == 1;
    }

    login() {
        this.errors = '';

        this.authenticationService.Login({ username: this.username, password: this.password }).subscribe(result => {
            this.password = '';
            this.authenticationService.SetToken(result.access_token);

            window.location.reload();
        },
            error => {
                this.errors = 'Blogi prisijungimo duomenys';
                this.password = '';
                console.log(this.error);
            });
    }

    logout(){
        this.authenticationService.Reset();

        window.location.reload();
    }

    register() {
        console.log(this.authenticationService.GetToken());
    }

    hasErrors(){
        return this.errors.length > 0;
    }
}
