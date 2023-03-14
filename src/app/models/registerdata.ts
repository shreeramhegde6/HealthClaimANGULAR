import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class RegisterData{
    userName:string='';
    password:string='';
    firstName:string='';
    lastName:string='';
    roleCategory:string='';
    email:string='';
    state:string='';
    address:string='';
    city:string='';
    dateOfBirth: Date = new Date() ;

    public formUserGroup:FormGroup;
    constructor(){
    var _builder=new FormBuilder();
    this.formUserGroup=_builder.group({
        UsernameControl:new FormControl('',Validators.compose([Validators.required,Validators.email])),
        UserPasswordControl:new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/)])),
        RoleControl:new FormControl('',Validators.compose([Validators.required])),
        firstNameControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)])),
        lastNameControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)])),
        cityControl:new FormControl('',Validators.compose([Validators.required])),
       
    });
    }
}