import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginServiceService } from '../services/login-service.service';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    let _router:Router;
    let _service:LoginServiceService;
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule,HttpClientModule,RouterModule,RouterTestingModule],
      declarations: [ RegistrationComponent ],
      providers: [{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })
    .compileComponents();
    
    _router=TestBed.inject(Router);
    _service=TestBed.inject(LoginServiceService);
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('register component register user', () => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.registerUser();
    console.log('register user',result);
    expect(result).toEqual(undefined);
  });
});
