import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../interfaces/register-responde.interface';
import { User } from '../../interfaces/user.interface';
import { environment } from '../../environments/environment.dev';
import { loginUser, ResponseAuth } from '../../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = `${environment.apiUrl}?c=Auth`;

  constructor(private http: HttpClient) { }

  registerUser (user : User) : Observable<Response>{
    return this.http.post<Response>(`${this.baseUrl}&m=register`, user);
  }

  login(login : loginUser) : Observable<ResponseAuth>{
    return this.http.post<ResponseAuth>(`${this.baseUrl}&m=login`,login);
  }


  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
