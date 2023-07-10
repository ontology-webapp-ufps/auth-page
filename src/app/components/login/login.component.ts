import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  loader = false;

  constructor(
    fb: FormBuilder, 
  ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
    });
  }

  actionButton() {
    console.log('do something');
  }

}
