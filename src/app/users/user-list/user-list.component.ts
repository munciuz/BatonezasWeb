import { Component, OnInit } from "@angular/core";

import { IUserListItem } from "./user-list-item";
import { UserService } from "../user.service";

@Component({
    moduleId: module.id,
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.components.css']
})

export class UserListComponent implements OnInit {
    pageTitle: string = 'Vartotojai';
    
    errorMessage: string;
    showImage: boolean = true;
    userList: IUserListItem[];

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUserList()
            .subscribe(users => this.userList = users,
            error => this.errorMessage = <any>error);
    }

    getTableRowClass(userItem: IUserListItem): string{
        var className = 'invalid';

        return className;
    }
}