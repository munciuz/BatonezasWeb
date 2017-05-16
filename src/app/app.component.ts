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
    error: string;
    logedIn: boolean = false;

    constructor(private authenticationService: AuthenticationService, private userService: UserService) {

    }

    ngOnInit(): void {
        this.userService.getProfileData().subscribe(result => {
            this.username = result.username;
            this.logedIn = true;
        },
            error => {
                console.log(error);
            });
    }

    login() {
        this.authenticationService.Login({ username: this.username, password: this.password }).subscribe(result => {
            this.password = '';
            this.authenticationService.SetToken(result.access_token);

            window.location.reload();
        },
            error => {
                this.error = 'Blogi prisijungimo duomenys';
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
}
