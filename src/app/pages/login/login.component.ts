import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  /** Reference to the form model. */
  loginForm: FormGroup = new FormGroup({ });


  constructor(private fb: FormBuilder) {
    this.loginForm = this.setupForm();
  }

  ngOnInit(): void { }

  /** Initialize the Form model. */
  private setupForm(): FormGroup {
    // Build the Form properties with validators
    const group = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    return group;
  }

  submit(): void {
    // TODO: call the Auth service
    const { email, password }: any = this.loginForm.value;
    console.log(`Email: ${email}, Password: ${password}`);
  }

}
