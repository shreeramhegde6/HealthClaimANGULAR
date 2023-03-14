import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class MemberData{
    memberId:number=0;
    firstName:string='';
    lastName:string='';
    email:string='';
    state:string='';
    address:string='';
    dateOfBirth: Date = new Date() ;
    physicianName:string='';
    claimId:number=0;
    physicianId:number=0;
    claimDate:string ='';
    claimAmount:number=0;

    
    public formUserGroup:FormGroup;
    constructor(){
    var _builder=new FormBuilder();
    this.formUserGroup=_builder.group({
        firstNameControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)])),
        lastNameControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)])),
        addressControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(100)])),
        stateControl:new FormControl('',Validators.compose([Validators.required])),
        dobControl:new FormControl('',Validators.compose([Validators.required])),
        emailControl:new FormControl('',Validators.compose([Validators.required,Validators.email])),
         
    });
    }
}