import { Component } from '@angular/core';
import { Gallery } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

const data = [
  {
    srcUrl: '../../../assets/images/works/work_1.jpg',
    previewUrl: '../../../assets/images/works/work_1.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_2.jpg',
    previewUrl: '../../../assets/images/works/work_2.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_3.jpg',
    previewUrl: '../../../assets/images/works/work_3.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_4.jpg',
    previewUrl: '../../../assets/images/works/work_4.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_5.jpg',
    previewUrl: '../../../assets/images/works/work_5.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_6.jpg',
    previewUrl: '../../../assets/images/works/work_6.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_7.jpg',
    previewUrl: '../../../assets/images/works/work_7.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_8.jpg',
    previewUrl: '../../../assets/images/works/work_8.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_9.jpg',
    previewUrl: '../../../assets/images/works/work_9.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_10.jpg',
    previewUrl: '../../../assets/images/works/work_10.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_11.jpg',
    previewUrl: '../../../assets/images/works/work_11.jpg',
  },
  {
    srcUrl: '../../../assets/images/works/work_12.jpg',
    previewUrl: '../../../assets/images/works/work_12.jpg',
  }
];

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    // Set items array
  }
}
