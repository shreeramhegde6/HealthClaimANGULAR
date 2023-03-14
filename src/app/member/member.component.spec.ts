import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginServiceService } from '../services/login-service.service';
import { MemberService } from '../services/member.service';
import { MemberComponent } from './member.component';

describe('MemberComponent', () => {
  beforeEach(async () => {
    let _router:Router;
    let _auth:LoginServiceService;
    let _service:MemberService;
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientTestingModule,HttpClientModule,RouterModule
      ],
      declarations: [
        MemberComponent
      ],
      providers: [{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService],
    }).compileComponents();
    _router=TestBed.inject(Router);
    _auth=TestBed.inject(LoginServiceService);
    _service=TestBed.inject(MemberService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MemberComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HealthcareApp'`, () => {
    const fixture = TestBed.createComponent(MemberComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HealthcareApp');
  });
  it('member component search member', () => {
    const fixture = TestBed.createComponent(MemberComponent);
    const app = fixture.componentInstance;
    let result=fixture.componentInstance.SearchMember();
    console.log('search member',result);
    expect(result).toEqual(undefined);
  });
});
