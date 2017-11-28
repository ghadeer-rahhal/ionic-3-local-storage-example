import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  template: `
    <button ion-button (click)="addItem()">Add</button>
    <button ion-button (click)="getItem()">Get</button>
    <button ion-button (click)="removeItem()">Remove</button>
  `
})

export class HomePage {

  private ITEM_NAME:string = 'ITEM';

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  addItem() {
    this.storage.set(this.ITEM_NAME, 'IONIC LOCAL STORAGE EXAMPLE').then(() => alert("Item Set"))
  }

  getItem() {
    this.storage.get(this.ITEM_NAME).then((name) => {
      alert('name is: ' + name);
    });
  }

  removeItem() {
    this.storage.remove(this.ITEM_NAME).then(() => {
      alert('item removed');
    });
  }

}
