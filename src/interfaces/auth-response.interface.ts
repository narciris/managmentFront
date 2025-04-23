export interface ResponseAuth {
    status:      string;
    status_code: number;
    message:     string;
    data:        Data;
}

export interface Data {
    token: string;
    user:  User;
}

export interface User {
    id:    number;
    email: string;
    name:  string;
}

export interface loginUser{
    email: string;
    password: string
}
