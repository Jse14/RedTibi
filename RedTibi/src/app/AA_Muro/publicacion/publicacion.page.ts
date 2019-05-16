import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Publi } from '../publi';
import { Content } from '@angular/compiler/src/render3/r3_ast';

import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import {fromLonLat} from 'ol/proj.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import {Style,Stroke,Circle} from 'ol/style.js';
import {Vector as VectorLayer} from 'ol/layer.js';
import VectorSource from 'ol/source/Vector.js';
import {defaults as defaultControls, FullScreen, OverviewMap} from 'ol/control.js';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {
  source: OlXYZ = null;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  p:Publi = new Publi();
  constructor(private navParams:NavParams,private modalController: ModalController) { }

  ngOnInit() {
    this.p = this.navParams.get('publicacion');
    
    setTimeout(() => {
      this.initMap()
    }, 500);
  }
  closeModal(){
    this.modalController.dismiss();
  }

  initMap(){
    if(this.source!=null)return;

    var iconFeature = new Feature({geometry: new Point(fromLonLat([-0.5133,38.38504]))});
    var stroke = new Stroke({color: [180, 0, 0, 1],width: 10});
    var style = new Style({image: new Circle({stroke: stroke,radius: 8}),stroke: stroke});
    var vectorSource = new VectorSource({features: [iconFeature]});
    var vectorLayer = new VectorLayer({source: vectorSource});    
    vectorLayer.setStyle(style);
    this.source = new OlXYZ({url: 'http://tile.osm.org/{z}/{x}/{y}.png'});
    var layer = new OlTileLayer({source: this.source});
    var view = new OlView({center: fromLonLat([-0.5133,38.38504]),zoom:16 ,minZoom: 2,maxZoom: 20});

    var map = new OlMap({
      layers: [layer,vectorLayer],
      controls: defaultControls().extend([
        new FullScreen(),
        new OverviewMap()
      ]),
      target: 'map',
      view: view
    });
  }

  verComentarios = true;
  verAsistentes = false;
  verCompartir = false;

  segmentChanged(ev: any){
    this.verComentarios=false;
    this.verAsistentes=false;
    this.verCompartir=false;
    switch(ev.detail.value){
      case "verComentarios": this.verComentarios=true;return;
      case "verAsistentes": this.verAsistentes=true;return;
      case "verCompartir": this.verCompartir=true;return;
      default:return;
    }
  }

}
