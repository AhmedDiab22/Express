import { Component, OnInit } from '@angular/core';
export interface Size {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-women-sale',
  templateUrl: './women-sale.component.html',
  styleUrls: ['./women-sale.component.css']
})
export class WomenSaleComponent  {

  womens = [
    {name : 'Jeans' , imgSrc : '../../../../assets/imgs/hp-w-cat-jeans-dt.jpg' , price : '50' , offer : '50% off'},
    {name : 'Sweaters' , imgSrc : '../../../../assets/imgs/0903-WLP-CAT-TOPS-DT-3.jpg' , price : '50' , offer : '50% off'},
    {name : 'Ahmed' , imgSrc : '../../../../assets/imgs/hp-w-utility-dt.jpg' , price : '50' , offer : '50% off'},
    {name : 'Mohamed' , imgSrc : '../../../../assets/imgs/LWL-Section-HP-dt-Card-02-OneSixFive-3.jpg' , price : '50' , offer : '50% off'},
    {name : 'Ali' , imgSrc : '../../../../assets/imgs/w-cozy.jpg' , price : '50' , offer : '50% off'},
    {name : 'Ali' , imgSrc : '../../../../assets/imgs/new-negin.jpg' , price : '50' , offer : '50% off'},
  ]

  sizes: Size[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


    constructor() {
    }
   



}
