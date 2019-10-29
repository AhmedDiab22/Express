import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {


  Women = ['Pampers Diapers' , 'Huggies Diapers' , 'Seventh Generation' , 'Diapers' , 'Derbies' , 'Driving shoes' , 'Espadrilles' , 'Loafers']

  constructor() { }

  ngOnInit() {
  }
}
