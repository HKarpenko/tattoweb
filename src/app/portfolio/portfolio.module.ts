import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../shared/shared.module';
import { ImageDialogComponent } from './portfolio/image-dialog/image-dialog.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    GalleryComponent,
    ImageDialogComponent
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
