import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  /** Reference to the form model. */
  signupForm: FormGroup = new FormGroup({ });


  constructor(private fb: FormBuilder) {
    this.signupForm = this.setupForm();
  }

  ngOnInit(): void {
  }


  /** Initialize the Form model. */
  private setupForm(): FormGroup {
    // Build the Form properties with validators
    const group = this.fb.group({
      firstName: [ null, [Validators.required] ],
      lastName: [ null, [Validators.required] ],
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', [Validators.required, Validators.minLength(8)] ],
    });
    return group;
  }

  submit(): void {
    // TODO: call the Auth service
    const { firstName, lastName, email, password }: any = this.signupForm.value;
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
  }

}
