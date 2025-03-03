import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent {

  username:string='';
  password:string='';

  constructor(private router : Router, private docAuth : DocauthService){}

  inValidLogin=false;

  checkLogin(){
    if(this.docAuth.authenticate(this.username,this.password)){
      this.router.navigate(['docdash']);
      this.inValidLogin=false;
    }
    else{
      this.inValidLogin=false;
      alert("Wrong Credintials");
      this.router.navigate(['home']);
    }
  }

}
