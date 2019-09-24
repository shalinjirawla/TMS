
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {    
  var UserName = localStorage.getItem("UserName");
  var Password = localStorage.getItem("Password");
  var UserId = localStorage.getItem("Type");
 
  let isLoggedIn = false;
  if(UserName!=null && UserName!=undefined && UserName!='')
  {
    isLoggedIn=true
  }else{
    isLoggedIn=false;
  }
     // ... your login logic here    
    var UserName = localStorage.getItem("UserName");
    var Password = localStorage.getItem("Password");
    var UserId = localStorage.getItem("Type");
    var OriginalType = sessionStorage.getItem("OriginalType");
    if (UserName != null && UserName != '' && Password != null && Password != '' && UserId != null && UserId != '') {
      if (UserId == OriginalType) {
        isLoggedIn = true;
      } else {
       // alert('login redirect');
        //this.router.navigate(['/login']);
      }
    }
    if (isLoggedIn) {
      return true;
      //isLoggedIn=false;
    } else {
      
      this.router.navigate(['/home']);
      return false;
    }
  }

}