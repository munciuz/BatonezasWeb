import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()

export class DishTypeGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        
        if (isNaN(id) || id < 1){
            this.router.navigate(['/dishtypes']);
        }

        return true;
    }
}