import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PasswordRegx } from '../passwordRegex';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
})
export class SignupPageComponent {
  SignUpForm: FormGroup;

  constructor() {
    this.SignUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      userName: new FormControl('', [
        Validators.required,
        this.noSpacesValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(PasswordRegx),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
  noSpacesValidator(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }

    return null;
  }

  handleFormSubmit() {
    console.log(this.SignUpForm);
    console.log(this.SignUpForm.value);
  }
}
