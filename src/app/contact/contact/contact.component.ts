import { Component, OnInit } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { Point } from 'ol/geom';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  mapCenterCoords: Coordinate = [1915832, 6646359];
  pointCoords: Point = new Point([1915882, 6646403]);
}
