import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensale',
  templateUrl: './mensale.component.html',
  styleUrls: ['./mensale.component.css']
})
export class MensaleComponent implements OnInit {

  womens = [
    {name : 'Jeans' , type : 'Jeans' , imgSrc : '../../../../assets/imgs/hp-m-sherpa-dt.jpg' , price : '50' , offer : '50% off'},
    {name : 'Sweaters' , type : 'T-shirt' , imgSrc : '../../../../assets/imgs/m-nba (1).jpg' , price : '50' , offer : '50% off'},
    {name : 'Ahmed' , type : 'Blofer' , imgSrc : '../../../../assets/imgs/style-expresslife.jpg' , price : '50' , offer : '50% off'},
    {name : 'Mohamed' , type : 'Suit' , imgSrc : '../../../../assets/imgs/hp-m-cat-jeans-dt.jpg' , price : '50' , offer : '50% off'},
    {name : 'Ali' , type : 'Blhart' , imgSrc : '../../../../assets/imgs/hp-m-cat-shirts-dt.jpg' , price : '50' , offer : '50% off'},
    {name : 'Ali' , type : 'Unknown' , imgSrc : '../../../../assets/imgs/hp-m-flannels-dt.jpg' , price : '50' , offer : '50% off'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
