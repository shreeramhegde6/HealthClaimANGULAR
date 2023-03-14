import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginServiceService } from '../services/login-service.service';
import { MemberService } from '../services/member.service';
import { MemberhomeComponent } from './memberhome.component';

xdescribe('MemberhomeComponent', () => {
  let component: MemberhomeComponent;
  let fixture: ComponentFixture<MemberhomeComponent>;

  beforeEach(async () => {
    let _router:Router;
    let _auth:LoginServiceService;
    let _service:MemberService;
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule,HttpClientModule,RouterModule,RouterTestingModule],
      declarations: [ MemberhomeComponent ],
      providers: [{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })
    .compileComponents();
 
    _router=TestBed.inject(Router);
    _auth=TestBed.inject(LoginServiceService);
    _service=TestBed.inject(MemberService);
    fixture = TestBed.createComponent(MemberhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('memberhome component member home', () => {
    fixture = TestBed.createComponent(MemberhomeComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.SubmitClaim(event);
    console.log('member home',result);
    expect(result).toEqual(undefined);
  });
});
