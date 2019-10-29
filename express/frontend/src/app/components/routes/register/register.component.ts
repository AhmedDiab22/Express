import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup , FormBuilder ,  FormControl, Validators } from '@angular/forms';
import { ApiUserService } from 'src/app/services/api-user.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

export interface Countries {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  user;
  username;
  
  countries: Countries[] = [
    {value: 'United States', viewValue: 'United States'},
    {value: 'Egypt', viewValue: 'Egypt'},
    {value: 'Germany', viewValue: 'Germany'},
    {value: 'USA', viewValue: 'USA'},
    {value: 'Italy', viewValue: 'Italy'},
    {value: 'Tunisya', viewValue: 'Tunisya'},
    {value: 'Algeria', viewValue: 'Algeria'},
  ];

  constructor(public fb: FormBuilder,private ngZone: NgZone, public snackBar: MatSnackBar,
    private apiService: ApiUserService , private router : Router) {
      this.mainForm();
     }

  ngOnInit() {
  }

  mainForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required , Validators.minLength(2), Validators.maxLength(10)]],
      lastName:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      country: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern("(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$")]]
    })
}

account_validation_messages = {
  'email': [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Enter a valid email' }
  ],
  'firstName': [
    { type: 'required', message: 'firstName is required' },
    { type: 'minlength', message: 'firstName must be at least 2 characters long' },
    { type: 'maxlength', message: 'firstName cannot be more than 10 characters long' },
    // { type: 'pattern', message: 'Your firstName must contain only numbers and letters' },
    // { type: 'validfirstName', message: 'Your firstName has already been taken' }
  ],
  'lastName': [
    { type: 'required',  message: 'lastName is required' },
    // { type: 'minlength', message: 'lastName must be at least 2 characters long' },
    // { type: 'maxlength', message: 'lastName cannot be more than 10 characters long' },
  ],
  'password': [
    { type: 'required', message: 'Password is required' },
    { type: 'pattern', message: 'Password must be at least 8 characters long contain at least one uppercase, one lowercase, and one number' }
  ],
  'country': [
    { type: 'required', message: 'country is required' }
  ],
  
  }

  // Getter to access form control
  get myForm(){
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      this.apiService.register(this.userForm.value).subscribe(
        (res) => {
          console.log(res);
          this.user = res
          let user = this.user.user.firstName + this.user.user.lastName
          this.username = user 
          this.ngZone.run(() => {
            this.router.navigate(['/'])
            this.snackBar.open('Welcome ' + this.username,  'Dismiss' , {duration: 3000});
          });
        }, (error) => {
          this.snackBar.open( error.error.text,  'Dismiss' , {duration: 3000});
        });
    }
  }

}
