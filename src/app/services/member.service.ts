import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberService {



_addMember="http://localhost:17755/api/Member/add-member";
_getAllMember="http://localhost:17755/api/Member/GetAllMember";
_getAllPhysician="http://localhost:17755/api/Member/GetAllPhysician";
_searchMember="http://localhost:17755/api/Member/SearchMember";
_getAllMemberById="http://localhost:17755/api/Member/GetAllMemberById?id=";
_getMemberDetailByMemberId="http://localhost:17755/api/Member/GetMemberDetailByMemberId?memberId=";
_getMemberId="http://localhost:17755/api/Member/GetMemberId?userId=";

  constructor(private http:HttpClient, private _router:Router) { }

  public memberId:any;

  AddMember(member:any){
    return this.http.post<any>(this._addMember,member);
  }
  GetAllMember()
  {
    return this.http.get(this._getAllMember);
  }
  GetAllPhysician()
  {
    return this.http.get(this._getAllPhysician);
  }
  SearchMember(searchmember:any){
    return this.http.post<any>(this._searchMember,searchmember);
  }
  GetAllMemberById(input:any)
  {
    return this.http.get(this._getAllMemberById+input);
  }
  GetMemberDetailByMemberId(input:any)
  {
    return this.http.get(this._getMemberDetailByMemberId+input);
  }
  GetMemberId(input:any)
  {
    return this.memberId= this.http.get(this._getMemberId+input);
  }
}
