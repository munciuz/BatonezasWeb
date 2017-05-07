import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IUser } from "./user";
import { UserService } from "../user.service";
import { RoleService } from "../role.service";
import { TagService } from "../../tags/tag.service";
import { ITagListItem } from "../../tags/tag-list/tag-list-item";
import { IRole } from "./role";

import { Subscription } from "rxjs/Subscription";

// import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
    user: IUser;
    userId: number;
    username: string = '';
    email: string = '';
    role: IRole = { id: 0, name: '' };
    allRoles: IRole[] = [];
    pageTitle: string = 'Edit';

    errorMessage: string;
    result: any;

    private sub: Subscription

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService,
        private tagService: TagService,
        private roleService: RoleService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                this.userId = params['id'];
                console.log('got a user ID: ', this.userId);

                this.service.getUser(this.userId)
                    .subscribe(user => {
                        console.log('got user from server ', user);
                        this.user = user;
                        this.username = this.user.username;
                        this.email = this.user.email;
                        this.role = this.user.role;
                        this.allRoles = this.user.allRoles;

                        if (this.role == null) {
                            this.role = this.allRoles[1];
                        }
                    },
                    error => this.errorMessage = <any>error);
            }
        )
    }

    onBackClicked(): void {
        this.router.navigate(['/users']);
    }

    onSave(): void {
        this.user = {
            id: this.userId,
            username: this.username,
            email: this.email,
            role: this.role,
            allRoles: null
        }

        this.service.editUser(this.user).subscribe(userId => {
            this.result = userId;
            this.router.navigate(['/users']);
        }, error => this.errorMessage = <any>error);
    }

    setRole(role: IRole) {
        this.role = role;
    }
}