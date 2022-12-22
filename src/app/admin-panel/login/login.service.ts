import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<User>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http:HttpClient, private router:Router) { }

  getCurrentUserValue(){
    return this.currentUserSource.value;
  }


  loadCurrentUser(token:string){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(this.baseUrl+'account',{headers}).pipe(
      map((user:User)=>{
        if (user) {
          window.localStorage.setItem('token',user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }


  login (values:any){
    return this.http.post(this.baseUrl+'account/login',values).pipe(
      map((user:User)=>{
        if (user) {
          window.localStorage.setItem('token',user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }



  loginOut(){
    window.localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }
}
