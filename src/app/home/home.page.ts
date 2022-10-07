import { Component } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'app';
  elementType = 'img';
  value: any;
  val: boolean = false
  searchValue: any
  objForSerach = [
    {
      'id': '1',
      'name': 'www.youtube.com'
    },
    {
      'id': '2',
      'name': 'www.google.com'
    }
    ,
    {
      'id': '3',
      'name': 'www.facebook.com'
    },
    {
      'id': '4',
      'name': 'www.linkedin.com'
    },
    {
      'id': '5',
      'name': 'www.twitter.com'
    }
  ]

  constructor() { }
  chnageEvent() {
    if (this.value != '' || this.value != undefined)
      this.val = true
    else
      this.val = false
  }

  chooseLink(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('subdept port:', event.value);
    this.value = event.value.name
    console.log("value : " + this.value);

  }
}
