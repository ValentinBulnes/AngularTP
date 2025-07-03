import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  formSignUp = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', []),
  }, [this.isMismatch]);

  isMismatch (control: AbstractControl): ValidationErrors | null {

    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      return {passwordMismatch: true};
    }
    return null;
  }
    

  onSubmit() {
    if (this.formSignUp.valid) {
      console.log(this.formSignUp.value);
    } else {
      console.log('Formulario no válido');
    }
  }

}
