import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent {

  username:string='';
  password:string='';
  isValidLogin=false;

  constructor(private adAuth : AdminauthService, private router : Router){}

  checkLogin(){
    if(this.adAuth.authenticate(this.username, this.password)){
      this.router.navigate(['admin']);
      this.isValidLogin=false;
    }
    else{
      this.isValidLogin=true;
      alert("Wrong Credintials");
      this.router.navigate(['home']);
    }
  }
}
