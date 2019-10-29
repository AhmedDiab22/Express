import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-security',
  templateUrl: './login-security.component.html',
  styleUrls: ['./login-security.component.css']
})
export class LoginSecurityComponent implements OnInit {

  submited = false;
  submitedemail = false;
  submitedpassword = false;
  
  constructor(private location : Location) { }

  ngOnInit() {
  }

  submit(){
    this.submited =! this.submited
  }
  submitemail(){
    this.submitedemail =! this.submitedemail
  }
  submitpassword(){
    this.submitedpassword =! this.submitedpassword
  }



  back(){
    this.location.back()
  }

}
