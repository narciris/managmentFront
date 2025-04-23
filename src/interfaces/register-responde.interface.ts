
export interface Response {
    status:      string;
    status_code: number;
    message:     string;
    data:        Data;
}

export interface Data {
    id:    number;
    name:  string;
    email: string;
}
