import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberData } from '../models/memberdata';
import { PhysicianData } from '../models/physiciandata';
import { SearchData } from '../models/searchdata';
import { MemberService } from '../services/member.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{

  title = 'HealthcareApp';
  MemberDetailList:Array<MemberData>=new Array<MemberData>();
  MemberData:Array<MemberData>=new Array<MemberData>();
  PhysicianList:Array<PhysicianData>=new Array<PhysicianData>();
  SearchDataModel: SearchData = new SearchData();
  public name ='';
  public routeId='';
  constructor(private _router:Router,private _auth:LoginServiceService,private _service:MemberService ,private jwt:JwtHelperService) { }
  ngOnInit():void
  {
    
    this.name=this.jwt.decodeToken(this._auth.getToken()?.toString()).unique_name;
    console.log(this.jwt.decodeToken(this._auth.getToken()?.toString()));
    console.log(this.name);
    this.routeId =this.jwt.decodeToken(this._auth.getToken()?.toString()).nameid

      this.GetAllPhysician();
      this.GetAllMember();
  }
  btnClickAddMember() {
      this._router.navigate(["user/search/add"]);
  }
  GetAllMember()
  {
    this._service.GetAllMember().subscribe(res=>this.MemberSuccess(res),res=>console.log(res)); 
  }
  MemberSuccess(response:any)
  {
    debugger;
    console.log(response);
    this.MemberDetailList=response;
  }
  GetAllPhysician()
  {
    this._service.GetAllPhysician().subscribe(res=>this.PhysicianSuccess(res),res=>console.log(res)); 
  }
  PhysicianSuccess(response:any)
  {
    debugger;
    this.PhysicianList=response;
  }
  clearSearch() {
    this.SearchDataModel.firstName = '';
    this.SearchDataModel.lastName = '';
    this.SearchDataModel.claimId = '';
    this.SearchDataModel.memberId = '';
    this.SearchDataModel.physicianId = 0;
    this.GetAllMember();
  }
  SearchMember()
  {
    var _userData = {
      firstName: this.SearchDataModel.firstName,
      memberId:  Number (this.SearchDataModel.memberId),
      lastName:this.SearchDataModel.lastName,
      claimId:Number(this.SearchDataModel.claimId),
      physicianId:Number(this.SearchDataModel.physicianId)
    };
    this._service.SearchMember(_userData).subscribe(res=>this.SearchMemberSuccess(res),res=>console.log(res)); 
  }
  SearchMemberSuccess(response:any)
  {
    this.MemberDetailList=response;
    console.log=response;
  }
  SubmitClaim(input:any)
  {
    
    this._router.navigate(["user/search/submitclaim",input]);
  }
  GetMemberDetailByMemberId(input:any)
  {
    this._service.GetMemberDetailByMemberId(input).subscribe(res => this.PostSuccess(res), res => console.log(res));
  }
  PostSuccess(input: any) {
    debugger;
    console.log(input);
    this.MemberData = input;
  }
}
