import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './users/pages/home/home.component';


const routes: Routes = [

  {path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {
  
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
