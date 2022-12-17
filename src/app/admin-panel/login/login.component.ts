import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  returnUrl : string;
  loginForm : FormGroup;


  constructor(private accountService:LoginService,private router:Router,private activedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.returnUrl = this.activedRoute.snapshot.queryParams['returnUrl'] || '/admin-blog';
    this.createLoginForm();
  }


  createLoginForm(){
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password : new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);
    }, error=>{
      console.log('hata : ',error);
    });
  }
 
}
