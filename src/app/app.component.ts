import { Component } from '@angular/core';
import { DishTypeService } from "./dish-types/dish-type.service";
import { AuthenticationService } from "./shared/authentication.service";

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
    logedIn: boolean;

    constructor(private authenticationService: AuthenticationService) {

    }

    ngOnInit(): void {
        
    }

    login() {
        this.authenticationService.Login({ username: this.username, password: this.password }).subscribe(result => {
            this.password = '';
            this.authenticationService.SetToken(result.access_token);
        },
        error => {
            this.error = 'Blogi prisijungimo duomenys';
            this.password = '';
            console.log(this.error);
        });
    }

    register() {
        console.log(this.authenticationService.GetToken());
    }
}
