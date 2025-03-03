import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string, passwaord:string){
    if(username=="ganesh" && passwaord=="ganesh123"){
      sessionStorage.setItem('username',username)
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log('login');
    let user = sessionStorage.getItem('username');
    return!(user==null);
  }

  logout(){
    console.log('logout')
    sessionStorage.removeItem('username')
  }
}
