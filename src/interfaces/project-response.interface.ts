export interface ResponseProjects {
    status:      string;
    status_code: number;
    message:     string;
    data:        Projects[];
}

export interface Projects {
    id:           number;
    name:         string;
    startDate:    Date;
    description:  string;
    deliveryDate: Date;
    userId:       number;
    file_path:    string;
}

export interface createProject{
    name:         string;
    startDate:    Date;
    description:  string;
    deliveryDate: Date;
    file_path:    string;
}
