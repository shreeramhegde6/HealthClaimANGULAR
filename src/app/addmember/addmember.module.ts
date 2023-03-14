import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Mainroutes } from '../routing/mainroutes';
import { memberroutes } from '../routing/memberroutes';
import { AddmemberComponent } from './addmember.component';


@NgModule({
  declarations: [
    AddmemberComponent
  ],
  imports: [
    
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(memberroutes)
  ],
  providers: [],
  bootstrap: [AddmemberComponent]
})
export class AddmemberModule { }