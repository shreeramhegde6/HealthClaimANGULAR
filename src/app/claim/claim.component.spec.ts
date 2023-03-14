import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ClaimService } from '../services/claim.service';
import { LoginServiceService } from '../services/login-service.service';

import { ClaimComponent } from './claim.component';

describe('ClaimComponent', () => {
    
  let component: ClaimComponent;
  let fixture: ComponentFixture<ClaimComponent>;

  beforeEach(async () => {
    let _router:Router;
    let _auth:LoginServiceService;
    let _service:ClaimService;
    await TestBed.configureTestingModule({
        imports:[ HttpClientTestingModule,HttpClientModule,RouterModule,RouterTestingModule],
      declarations: [ ClaimComponent ],
      providers: [{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })

    .compileComponents();
    _router=TestBed.inject(Router);
    _auth=TestBed.inject(LoginServiceService);
    _service=TestBed.inject(ClaimService);
    fixture = TestBed.createComponent(ClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('claim component add claim', () => {
    fixture = TestBed.createComponent(ClaimComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.AddClaim(event);
    console.log('add claim',result);
    expect(result).toEqual(undefined);
  });
});
