import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/services/api-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-user',
  templateUrl: './slide-user.component.html',
  styleUrls: ['./slide-user.component.css']
})
export class SlideUserComponent implements OnInit {

  constructor(private apiUserService : ApiUserService , private router : Router) { }

  ngOnInit() {
  }

  signOut(){
    this.apiUserService.logout();
    this.router.navigate(['/'])
  }

}
