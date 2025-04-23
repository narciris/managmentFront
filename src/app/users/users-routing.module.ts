import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';
import { CreateProjectsComponent } from './pages/create-projects/create-projects.component';

const routes: Routes = [
  { path: '',
    children: [
      {path: "projects", component:ListProjectsComponent},
      {path: "", redirectTo: "projects", pathMatch: 'full'},
      {path: "create-project", component: CreateProjectsComponent}

    ]
   },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
