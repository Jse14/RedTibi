import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Publi } from '../publi';

import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import {fromLonLat} from 'ol/proj.js';
import {defaults as defaultControls, FullScreen, OverviewMap} from 'ol/control.js';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {
  showMap=true;
  map: OlMap;
  source: OlXYZ = null;
  layer: OlTileLayer;
  view: OlView;
  titulo=null;
  p:Publi = new Publi();
  constructor(private navParams:NavParams,private modalController: ModalController) { }

  ngOnInit() {
    this.p.title = this.navParams.get('titulo');
    this.p.subtitle = this.navParams.get('subtitulo');
    this.p.numLikes = this.navParams.get('numLikes');
    this.p.numComents = this.navParams.get('numComents');
    
    setTimeout(() => {
      this.initMap()
    }, 500);
  }
  closeModal(){
    this.modalController.dismiss();
  }

  initMap(){


    if(this.source!=null){
      return;
    };
    
    this.source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.layer = new OlTileLayer({
      source: this.source
    });

    this.view = new OlView({
      center: fromLonLat([-0.5133,38.38504]),
      zoom:16 ,
      minZoom: 2,
      maxZoom: 20
    });

    this.map = new OlMap({
      layers: [this.layer],
      controls: defaultControls().extend([
        new FullScreen(),
        new OverviewMap()
      ]),
      target: 'map',
      view: this.view
    });
  }

}
