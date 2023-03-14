import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  _getAllClaimType ="http://localhost:17755/api/Claim/GetAllClaimType";
  _addClaim="http://localhost:17755/api/Claim/add-claim";

  constructor(private http:HttpClient, private _router:Router) { }

  GetAllClaimType()
  {
    return this.http.get(this._getAllClaimType);
  }
  AddClaim(claim:any){
    return this.http.post<any>(this._addClaim,claim);
  }
}
