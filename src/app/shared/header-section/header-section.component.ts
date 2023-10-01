import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent {
  @Input() title: string;
  @Input() imageUrl: string;

  backgroundImg: string;
  
  constructor() { }

  ngOnInit(): void  {
    this.backgroundImg = `url(${this.imageUrl})`;
  }
}
