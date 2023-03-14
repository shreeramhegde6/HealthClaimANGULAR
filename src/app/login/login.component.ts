import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/userdata';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,private _service:LoginServiceService) { }

  UserDataModel: UserData = new UserData();
  ngOnInit(): void {
  }

  loginUser() {
    var _userData = {
      userName: this.UserDataModel.userName,
      password: this.UserDataModel.password
    };
    this._service.loginUser(_userData).subscribe(res => {
      localStorage.setItem('token', res.token);
      debugger;
      if(res.role=="Admin")
      {
        localStorage.setItem('LogAdmin','true');
        this._router.navigate(["user/search"]);
      }
      if(res.role=="Member")
      {
        localStorage.setItem('LogAdmin','false');
        this._router.navigate(["member/home"]);
      }  
      
    }, res => console.log(res));
 
  }

}
