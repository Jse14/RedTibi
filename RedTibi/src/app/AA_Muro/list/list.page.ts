import { Component, OnInit } from '@angular/core';
import { Publi } from '../publi';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  //public items: Array<{ title: string; subtitle: string; numLikes:any;numComents:any}> = [];
  public items: Array<Publi>=[];
  constructor() {
    for (let i = 1; i < 11; i++) {
      var nuevaPubli = new Publi();
      nuevaPubli.title = 'user' + i;
      nuevaPubli.subtitle= '@User' + i;
      nuevaPubli.numLikes=Math.floor(Math.random()*100);
      nuevaPubli.numComents=Math.floor(Math.random()*100);
      this.items.push(nuevaPubli);
    }
  }

  ngOnInit() {
  }
}
