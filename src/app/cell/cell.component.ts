import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'my-cell',                //decorator for class
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() isAlive: boolean;    //decorator fr a property


  constructor() { }

  ngOnInit() {
  }
  @HostBinding('style.background') get color() {
    if (this.isAlive === true) {
      return 'green';
    }
    else {
      return 'white';
    }
  }
  
}



