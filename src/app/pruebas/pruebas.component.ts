import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {


  constructor(db: AngularFireDatabase) {

  }

  ngOnInit() {

  }

}
