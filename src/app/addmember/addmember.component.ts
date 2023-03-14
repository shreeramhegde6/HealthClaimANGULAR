import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberData } from '../models/memberdata';
import { MemberService } from '../services/member.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  constructor(private _router: Router,private _memberService:MemberService) { }
  MemberDataModel: MemberData = new MemberData();
  MemberDataModels: Array<MemberData> = new Array<MemberData>();
  ngOnInit(): void {
  }
  AddMember(event:any)
  {
    debugger;
    var _userData = {
      firstName: this.MemberDataModel.firstName,
      lastName: this.MemberDataModel.lastName,
      email: this.MemberDataModel.email,
      state: this.MemberDataModel.state,
      address: this.MemberDataModel.address,
      dateOfBirth: this.MemberDataModel.dateOfBirth,
    };
    this._memberService.AddMember(_userData).subscribe(res=>this.Success(res),res=>console.log(res))
    this.MemberDataModel = new MemberData();  
  }
  Success(input: any) {
    //console.log(input);
    this.MemberDataModels = input;
    this.MemberDataModel = input;
    alert("New Member added Successfully!!\n" +"Press okay to Continue");
    this._router.navigate(['user/search']);
    // for(var i=0;i<this.MemberDataModels.length;i++){
    //   console.log();
    // }
  }
}
