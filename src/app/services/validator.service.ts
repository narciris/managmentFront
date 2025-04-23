import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public namesPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors
    && form.controls[field].touched
  }

  getFieldError(form: FormGroup, field: string): string[] {
    if(!form.controls[field]) return []
    const errors = form.controls[field].errors || {}
    const messages: string[] = [];
    for (const key of Object.keys(errors)) {
        switch (key) {
          case 'required':
           messages.push("est mensaje es requerido");
           break;

          case 'minlength':
           messages.push (`Minimo ${errors['minlength'].requiredLength} caracteres`);
           break;
           case 'futureDate':
            messages.push('La fecha debe ser igual o posterior a la fecha actual');
            break;
                 

          }
          if (field === 'delivery_date' && form.errors?.['dateBeforeStart']) {
            messages.push('La fecha de entrega no puede ser anterior a la fecha de inicio');
          }
        }
        return messages;
  }

  isSamePassword(field1: string, field2: string) {

    return (form: AbstractControl): ValidationErrors | null => {
      const field1Value = form.get(field1)?.value
      const field2Value = form.get(field2)?.value
      return field1Value === field2Value ? null : {isSamePassword: false}

    }
  }
   minDateToday(control: AbstractControl): ValidationErrors | null {
    const currentDate = new Date();
    const inputDate = new Date(control.value);
    if (inputDate < currentDate) {
      return { futureDate: true };
    }
    return null;
  }

   dateBeforeStartDate(startDateField: string) {
    return (form: AbstractControl): ValidationErrors | null => {
      const startDate = new Date(form.get(startDateField)?.value);
      const deliveryDate = new Date(form.value.deliveryDate);
      if (deliveryDate < startDate) {
        return { dateBeforeStart: true };
      }
      return null;
    };
  }
}
