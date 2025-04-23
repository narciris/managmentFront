import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { createProject, Projects } from '../../../../interfaces/project-response.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../services/validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-projects',
  standalone: false,
  templateUrl: './create-projects.component.html',
  styleUrl: './create-projects.component.css'
})


export class CreateProjectsComponent implements OnInit {

  public projectForm !: FormGroup

  projects: createProject = {
    name: '',
    description: '',
    startDate: new Date(),
    deliveryDate: new Date(),
    file_path: ''
  };
  
  constructor (
    private serviceProjecst : ProjectsService,
    private fb : FormBuilder ,
    private validatorService: ValidatorService,
    private router : Router
  ){

  }
  ngOnInit(): void {
   this.projectForm = this.fb.group({
    name: ['',Validators.required],
    description: ['',Validators.required],
    startDate:['',[Validators.required,this.validatorService.minDateToday]],
    deliveryDate: ['',[Validators.required,this.validatorService.minDateToday]],
    filePath: ['',Validators.required]
   }, {
    asyncValidators : [this.validatorService.dateBeforeStartDate('startDate')]
   }
  );
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.projectForm, field);
  }

  getFieldErrors(field: string): string[] {
    return this.validatorService.getFieldError(this.projectForm, field);
  }

  onSubmit() : void{
    if (this.projectForm.invalid) return;

    const formValues = this.projectForm.value;
  
    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('description', formValues.description);
    formData.append('start_date', formValues.startDate);
    formData.append('delivery_date', formValues.deliveryDate);
    formData.append('file', formValues.filePath);
    console.log("Datos enviados al backend:", formData);
    
    this.serviceProjecst.createProjects(formData).subscribe(
      {
        next: (response) =>{
          console.log("proyecto creado",response)
          alert("proyecto creado correctamente")
          this.router.navigate(['/users/projects'])
        },
        error: (error) =>{
          console.log("error al crear proyecto", error)
          alert("no se pudo crear el proyecto")
        }
      }
    )

  }

}
