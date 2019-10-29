import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiUserService } from 'src/app/services/api-user.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
  submitted = false;
  userForm: FormGroup;
  user;
  username
  

  constructor(public fb: FormBuilder,private ngZone: NgZone, public snackBar: MatSnackBar,
    private apiService: ApiUserService , private router : Router ,
     ) {
      this.mainForm();
     }

  ngOnInit() {
  }

  mainForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$")]]
    })
}

account_validation_messages = {
  'email': [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Enter a valid email' }
  ],
  'password': [
    { type: 'required', message: 'Password is required' },
    { type: 'pattern', message: 'Password must be at least 8 characters long contain at least one uppercase, one lowercase, and one number' }
  ]
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
      this.apiService.login(this.userForm.value).subscribe(
        (res) => {
          this.user = res
          let user = this.user.user.firstName + this.user.user.lastName
          this.username = user
          this.ngZone.run(() => {
            this.router.navigateByUrl('/')
            this.snackBar.open('Welcome ' + this.username,  'Dismiss' , {duration: 3000});
          });
        }, (error) => {
          // this.toastr.error(error.error.message)
          this.snackBar.open( error.error.msg,  'Dismiss' , {duration: 3000});
          if(error.error.msg === 'Email not found'){
            this.email = '',
            this.password = ''
          }else{
            this.password = ''
          }
        });
    }
  }
}
