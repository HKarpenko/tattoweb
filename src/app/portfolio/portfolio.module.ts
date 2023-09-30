import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PortfolioComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    GalleryModule,
    LightboxModule,
    SharedModule
  ]
})
export class PortfolioModule { }
