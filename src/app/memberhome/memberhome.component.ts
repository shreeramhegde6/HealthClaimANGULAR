import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MemberData } from '../models/memberdata';
import { LoginServiceService } from '../services/login-service.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-memberhome',
  templateUrl: './memberhome.component.html',
  styleUrls: ['./memberhome.component.css']
})
export class MemberhomeComponent implements OnInit {
  public name = '';
  public routeId = '';
  public memberId = 0;
  constructor(private _router: Router, private _auth: LoginServiceService, private jwt: JwtHelperService,
    private _memberService: MemberService) { }

  MemberData: Array<MemberData> = new Array<MemberData>();
  ngOnInit(): void {
    debugger;
    this.name = this.jwt.decodeToken(this._auth.getToken()?.toString()).unique_name;
    console.log(this.jwt.decodeToken(this._auth.getToken()?.toString()));
    console.log(this.name);
    this.routeId = this.jwt.decodeToken(this._auth.getToken()?.toString()).nameid
    this.GetAllMemberById(Number(this.routeId));
    this.GetMemberId(Number(this.routeId));
  }
  GetAllMemberById(input: any) {
    this._memberService.GetAllMemberById(input).subscribe(res => this.PostSuccess(res), res => console.log(res));
  }
  PostSuccess(input: any) {
    debugger;
    console.log(input);
    this.MemberData = input;
  }
  SubmitClaim(input:any)
  {
    this._router.navigate(["member/home/submitclaim",input]);
  }
  GetMemberId(input: any)
  {
    this._memberService.GetMemberId(input).subscribe(res => this.Success(res), res => console.log(res));
  }
  Success(input: any) {
   return this.memberId = input;
  }
}
