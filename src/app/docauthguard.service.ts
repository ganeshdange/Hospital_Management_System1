import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root'
})
export class DocauthguardService implements CanActivate{

  constructor(private docAuth : DocauthService, private router : Router) { }

  canActivate() {
      if(this.docAuth.isUserLoggedIn()){
        return true;
      }
      else{
        this.router.navigate(['doclogin']);
        return false;
      }
  }
}
