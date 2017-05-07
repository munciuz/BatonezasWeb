import { IRole } from "./role";

export interface IUser {
    id: number;
    username: string;
    email: string;
    role: IRole;
    allRoles: IRole[];
}