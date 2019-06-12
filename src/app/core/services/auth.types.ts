import { userInfo } from 'os';

export enum AuthProvider {
    Email,
    Facebook
}

export interface User {
    name?: string;
    email: string;
    password: string;
}

export interface AuthOptions  {
    inSignIn: boolean;
    provider: AuthProvider;
    user: User;
}
