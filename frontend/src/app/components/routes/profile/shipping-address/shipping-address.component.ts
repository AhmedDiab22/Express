import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
export interface Countries {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  submited = false;
  countries: Countries[] = [
    {value: 'United States', viewValue: 'United States'},
    {value: 'Egypt', viewValue: 'Egypt'},
    {value: 'Germany', viewValue: 'Germany'},
    {value: 'USA', viewValue: 'USA'},
    {value: 'Italy', viewValue: 'Italy'},
    {value: 'Tunisya', viewValue: 'Tunisya'},
    {value: 'Algeria', viewValue: 'Algeria'},
  ];

  constructor(private location : Location) { }

  ngOnInit() {
  }

  submit(){
    this.submited =! this.submited
  }

  back(){
    this.location.back()
  }

  // // email = new FormControl('', [Validators.required, Validators.email]);
  // // firstname = new FormControl('', [Validators.required]);
  // // lastname = new FormControl('', [Validators.required]);
  // // country = new FormControl('', [Validators.required]);
  // // password = new FormControl('' , [Validators.required , Validators.pattern("(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$")])

  // // emailMessage() {
  // //   return this.email.hasError('required') ? 'You must enter a value' :
  // //       this.email.hasError('email') ? 'Not a valid email' :
  // //           '';
  // // }
  // // passwordMessage() {
  // //   return this.password.hasError('required') ? 'You must enter a value' :
  // //         this.password.hasError('pattern') ? 'You must enter numbers and  chars capital and small ' : 
  // //       this.password.hasError('password') ? 'Not a valid password' :
  // //           '';
  // // }
  // // firstnameMessage() {
  // //   return this.firstname.hasError('required') ? 'You must enter a value' :'';
  // // }
  // // lastnameMessage() {
  // //   return this.lastname.hasError('required') ? 'You must enter a value' :'';
  // // }
  // // countryMessage() {
  // //   return this.country.hasError('required') ? 'You must enter a value' :'';
  // }

}
