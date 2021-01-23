import { Component, OnInit } from '@angular/core';
import {Productores} from './productores'
@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.css']
})
export class ProductoresComponent implements OnInit {


  productores = Productores;
  constructor() { }

  ngOnInit() {
  }

}
