import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images: Array<any> = []
  products 

  constructor() {
    this.images = [{ name: 'http://lorempixel.com/640/480/animals/' }]
  }

  ngOnInit() {

    this.products = [
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000101_3043.webp' , description : 'Ahmed Hamed Diab' , price : 35},
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000228_3046.webp' , description : 'Ahmed Hamed Diab' , price : 35},
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000229_3046.webp' , description : 'Ahmed Hamed Diab' , price : 35},
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000231_3043.webp' , description : 'Ahmed Hamed Diab' , price : 35},
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000238_3046.webp' , description : 'Ahmed Hamed Diab' , price : 35},
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000223_3046.webp' , description : 'Ahmed Hamed Diab' , price : 35},
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000224_3043.webp' , description : 'Ahmed Hamed Diab' , price : 35},
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000225_3043.webp' , description : 'Ahmed Hamed Diab' , price : 35},
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000226_3043.webp' , description : 'Ahmed Hamed Diab' , price : 35},
      {name : 'Ahmed' , imgUrl : '../../../../../assets/imgs/0308_80000227_3043.webp' , description : 'Ahmed Hamed Diab' , price : 35},

    ]
  }

}
