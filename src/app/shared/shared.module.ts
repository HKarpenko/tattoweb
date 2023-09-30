import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderSectionComponent } from './header-section/header-section.component';

@NgModule({
  declarations: [MapComponent, HeaderSectionComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MapComponent,
    MatIconModule,
    HeaderSectionComponent
  ]
})
export class SharedModule { }
