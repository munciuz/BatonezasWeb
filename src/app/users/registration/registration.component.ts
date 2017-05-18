import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { RoleService } from "../role.service";
import { TagService } from "../../tags/tag.service";
import { ITagListItem } from "../../tags/tag-list/tag-list-item";

import { Subscription } from "rxjs/Subscription";

// import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {
    
    username: string = '';
    email: string = '';
    password: string = '';
    password2: string = '';

    errors: string = '';

    constructor() { }

    ngOnInit() {
    }

    register() {
        this.password = '';
        this.password2 = '';
        this.errors = 'Nesutampa slaptažodžiai'
    }

    hasErrors(){
        return this.errors.length > 0;
    }
}