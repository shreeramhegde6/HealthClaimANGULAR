import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Mainroutes } from '../routing/mainroutes';
import { MemberComponent } from './member.component';

@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Mainroutes)
  ],
  providers: [],
  bootstrap: [MemberComponent]
})
export class MemberModule { }
