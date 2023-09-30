import {Component, NgZone, Output, Input, EventEmitter, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import {View, Map, Feature } from 'ol';
import {Coordinate} from 'ol/coordinate';
import { ScaleLine, defaults as DefaultControls} from 'ol/control';
import proj4 from 'proj4';
import Projection from 'ol/proj/Projection';
import {register}  from 'ol/proj/proj4';
import {get as GetProjection} from 'ol/proj'
import {Extent} from 'ol/extent';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {Vector as LayerVector} from 'ol/layer';
import {Vector as SourceVector} from 'ol/source';
import {Point} from 'ol/geom';
import {Style, Icon} from 'ol/style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input() zoom: number;
  @Input() center: Coordinate;
  @Input() point: Point;

  view: View;
  projection: Projection;
  extent: Extent = [-20026376.39, -20048966.10,
    20026376.39, 20048966.10];
  map: Map;
  @Output() mapReady = new EventEmitter<Map>();

  constructor(private zone: NgZone, private cd: ChangeDetectorRef) { }

  ngAfterViewInit():void {
    if (!this.map) {
      this.zone.runOutsideAngular(() => this.initMap())
    } 
    setTimeout(() => this.mapReady.emit(this.map));
  }

  private initMap(): void{
    proj4.defs("EPSG:3857","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
    register(proj4);
    this.projection = GetProjection('EPSG:3857');
    this.projection.setExtent(this.extent);
    this.view = new View({
      center: this.center,
      zoom: this.zoom,
      projection: this.projection,
    });
    this.map = new Map({
      layers: [new TileLayer({
        source: new OSM({})
      })],
      target: 'map',
      view: this.view,
      controls: DefaultControls().extend([
        new ScaleLine({}),
      ]),
    });

    if(this.point) {
      let layer = new LayerVector({
        source: new SourceVector({
            features: [
                new Feature({
                    geometry: this.point
                })
            ]
        }),
        style: new Style({
          image: new Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: '../../../assets/images/map_logo.svg',
            scale: 0.04
          })
        })
      });
      this.map.addLayer(layer);
    }
  }
}
