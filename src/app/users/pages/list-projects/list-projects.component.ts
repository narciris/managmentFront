import { Component, OnInit } from '@angular/core';
import { Projects } from '../../../../interfaces/project-response.interface';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-list-projects',
  standalone: false,
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css'
})
export class ListProjectsComponent implements OnInit {
 

  projects: Projects[] = [];

  constructor (private projectService : ProjectsService){
    
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (response) => {
        this.projects = response.data
        console.log('Proyectos del usuario autenticado:', this.projects);
      },
      error: (error) =>{
        console.log("erro al obtener projects", error)
      }
    })
  }
}
