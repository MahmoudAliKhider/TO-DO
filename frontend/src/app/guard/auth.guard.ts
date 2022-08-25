import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
 

export class AuthGuard implements CanActivate {
  constructor(private userservice:UserService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     {
    if(this.userservice.isLoggedIn()){
      return true;
    }
   this.router.navigate(['/login'],{queryParams:{retunUrl:state.url}})
    return false;
  }
  
}
