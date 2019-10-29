import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import {VERSION} from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {
//   public imgeposturl: string;
// public myHeaders: any;

//   public color1: string = '#2889e9';
//   name = 'Angular';
// album:any = [];
// constructor(public vcRef: ViewContainerRef , public cpService: ColorPickerService){
//   this.imgeposturl = "http://facebook.com" // URL where you want to handle uploaded image.
//  this.myHeaders = [
//             { header: 'Accesstoken', value: 'Token To validate on server.' }
//         ];
// }

//   ngOnInit() {
//   }

//   onUploadFinished(file: any) {
//     console.log('uploaded');
    
//     //after uploading image it will return on this function we can get value from server.
    
//     }
    
  

//     public onChangeColor(color: string): Cmyk {
//       const hsva = this.cpService.stringToHsva(color);
  
//       const rgba = this.cpService.hsvaToRgba(hsva);
  
  
//       console.log(color);
//        console.log(rgba);
  
//       return this.cpService.rgbaToCmyk(rgba);
//     }





}
