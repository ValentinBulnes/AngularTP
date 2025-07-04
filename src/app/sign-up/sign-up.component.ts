import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { WineDataService } from '../wine-data.service';
import { User } from './User';

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

  constructor(private wineDataService: WineDataService) {}

  isMismatch (control: AbstractControl): ValidationErrors | null {

    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      return {passwordMismatch: true};
    }
    return null;
  }
    
  onSubmit() {
    if (this.formSignUp.valid) {

      const userData: User = {
        username: this.formSignUp.value.username!,
        email: this.formSignUp.value.email!,
        password: this.formSignUp.value.password!,
      };

      this.wineDataService.createUser(userData).subscribe(response => {
      console.log('Usuario creado con éxito:', response);
      alert('¡Te has registrado correctamente!');
      this.formSignUp.reset();
});
    } 
    else {
      console.log('Formulario no válido');
    }
  }

}