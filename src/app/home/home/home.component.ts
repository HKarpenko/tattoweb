import { Component } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { Point } from 'ol/geom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mapCenterCoords: Coordinate = [1915832, 6646359];
  pointCoords: Point = new Point([1915882, 6646403]);

  window = window;
}
