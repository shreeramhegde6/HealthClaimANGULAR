import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MemberService } from '../services/member.service';

import { AddmemberComponent } from './addmember.component';

xdescribe('AddmemberComponent', () => {
  let component: AddmemberComponent;
  let fixture: ComponentFixture<AddmemberComponent>;

  beforeEach(async () => {
    let _router:Router;
    let _service:MemberService;
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule,HttpClientModule,RouterModule,RouterTestingModule],
      declarations: [ AddmemberComponent ],
      providers: [{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })
    .compileComponents();

    _router=TestBed.inject(Router);
    _service=TestBed.inject(MemberService);
    fixture = TestBed.createComponent(AddmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('member component add member', () => {
    fixture = TestBed.createComponent(AddmemberComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.AddMember(event);
    console.log('add member',result);
    expect(result).toEqual(undefined);
  });
});
