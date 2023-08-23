import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarTopComponent
  ]
})
export class CoreModule { }
