import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginService } from 'src/app/admin-panel/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService:LoginService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.currentUser$.pipe(
      map(auth=>{
        if(auth){
          return true;
        }
        else{
          this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
          console.log('logine yönlendirildi');
        }
      })
    )
  }
}
