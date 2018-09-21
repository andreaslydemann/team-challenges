export interface UserModel {
    id: string;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    teamId: string;
}