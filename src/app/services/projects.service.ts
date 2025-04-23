import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createProject, Projects, ResponseProjects } from '../../interfaces/project-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseUrl = `${environment.apiUrl}?c=Project`

  constructor( private http: HttpClient) {
    
   }
  getProjects(): Observable<ResponseProjects> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
     return this.http.get<ResponseProjects>(`${this.baseUrl}&m=getByUser`,{headers})
 
   }

   createProjects(projects : FormData) : Observable<ResponseProjects>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<ResponseProjects>(`${this.baseUrl}&m=create`, projects ,{headers})
   }
}
