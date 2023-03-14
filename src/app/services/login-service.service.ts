import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _loginUrl ="http://localhost:17755/api/Login/login-user"
  _registerUrl="http://localhost:17755/api/Login/register-user"

  constructor(private http:HttpClient, private _router:Router,private jwt: JwtHelperService) { }
  public role ='';
  public routeId='';

  loginUser(login:any){
    return this.http.post<any>(this._loginUrl,login);
  }

  registerUser(login:any){
    return this.http.post<any>(this._registerUrl,login);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getUserRole(){
    this.role=this.jwt.decodeToken(this.getToken()?.toString()).role;  
    return this.role;
  }
  getUserId(){
    this.routeId =this.jwt.decodeToken(this.getToken()?.toString()).nameid  
    return this.routeId;
  }
  logginIn(){
    return !!localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
