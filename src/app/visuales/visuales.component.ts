import { Component, OnInit } from '@angular/core';
import {Visuales} from './visuales'
@Component({
  selector: 'app-visuales',
  templateUrl: './visuales.component.html',
  styleUrls: ['./visuales.component.css']
})
export class VisualesComponent implements OnInit {

  visuales = Visuales;
  
  constructor() { }

  ngOnInit() {
  }

}
