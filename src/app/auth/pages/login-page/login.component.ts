import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { loginUser } from '../../../../interfaces/auth-response.interface';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  
  
  email : string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(private authService : AuthService,private routet: Router){
    
  }

  onLogin():void{
    const userLogin: loginUser = {
      email: this.email,
      password: this.password
    };
     this.authService.login(userLogin).subscribe({
         next: (response) => {
          if(response.data.token){
          this.authService.saveToken(response.data.token);
          console.log("token guardado con exitos", response.data.token)
          this.routet.navigate(['/users/projects']);
          }else{
            this.errorMessage = 'No se recibió un token válido.';
            }
         },
         error: (error) => {
          console.error('Error al iniciar sesión:', error);
          this.errorMessage = 'Usuario o contraseña incorrectos.';
        }
         
     });
  }

}
