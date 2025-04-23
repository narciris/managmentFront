import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginComponent } from './pages/login-page/login.component';


const routes: Routes = [
  {
    path:'',
    children : [
      {path: 'sign-up', component: RegisterPageComponent},
      {path: 'login', component: LoginComponent},
      {path: '**', redirectTo: 'sign-up'}
    ]

  }
]

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class AuthRoutingModule { }
