import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../services/validator.service';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {
  public myForm!: FormGroup;
  public successMessage : string = '';
  public errorMessage : string = '';
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private validatorService: ValidatorService,
  ){
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorService.namesPattern)]],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password2: ['', [Validators.required, Validators.minLength(4)]],
    }, {
      validators: [this.validatorService.isSamePassword('password', 'password2')]
    });
  }
  isValidField(field: string): boolean | null{
    return this.validatorService.isValidField(this.myForm, field)
  }

  getFieldErrors(field: string): string[] {
    return this.validatorService.getFieldError(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();

    if (this.myForm.valid) {
      const userData = {
        name: this.myForm.value.name,
        email: this.myForm.value.email,
        password: this.myForm.value.password
      };

      this.authService.registerUser(userData).subscribe({
        next: (response) => {
          this.successMessage = 'Usuario registrado correctamente';
          console.log(response);
        },
        error: (err) => {
          this.errorMessage = 'Error al registrar el usuario: ' + err.message;
          console.error(err);
        }
      });
    } else {
      this.errorMessage = 'Formulario no válido. Por favor, corrige los errores.';
    }
  }

 
}
