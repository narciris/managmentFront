import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateProjectsComponent } from './pages/create-projects/create-projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListProjectsComponent,
    HomeComponent,
    CreateProjectsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
