import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { AppComponent } from "../app.component";


@Component({
  selector: 'my-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  @Input() row: number;
  @Input() column: number;
  public currentGeneration: boolean[][];
  public jhalarColumn = 0;

  constructor() {
  }

  ngOnInit() {

    this.currentGeneration = [];
    for (let iter = 0; iter < this.row; iter++) {
      const x = [];                                                 //Creating a new Array
      for (let jter = 0; jter < this.column; jter++) {
        x.push(false);
      }
      this.currentGeneration.push(x);
    }

  }
  getAliveNeighbours(i, j) {
    let counter = 0;
    for (let row = i - 1; row <= i + 1; row++) {
      for (let column = j - 1; column <= j + 1; column++) {
        if (row === i && column === j) {
          continue;
        }
        let rx = row;
        let cx = column; // I am sorry. It won't happen again! :( 
        if (rx === -1) {
          rx = this.row - 1;
        }
        if (rx === this.row) {
          rx = 0;
        }
        if (cx === -1) {
          cx = this.column - 1;
        }
        if (cx === this.column) { // :D
          cx = 0;
        }
        if (this.currentGeneration[rx][cx] === true) {
          counter++;
        }
      }
    }

    return counter;
  }
  colorChanger(i, j) {

    if (this.currentGeneration[i][j] === true) {
      this.currentGeneration[i][j] = false;
    }
    else {
      this.currentGeneration[i][j] = true;
    }
  }
  getNewWorld() {
    let world = []
    for (let iter = 0; iter < this.row; iter++) {
      const x = [];                                                 //Creating a new Array
      for (let jter = 0; jter < this.column; jter++) {
        x.push(false);
      }
      world.push(x);

    }
    return world;
  }

  startJhalar() {
    setInterval(() => this.toggleJhalar(), 100);
  }
  start() {
    setInterval(() => this.moveToNextGeneration(), 100);
  }

  toggleJhalar() {
    const newWorld = this.getNewWorld();

    for (let i = 0; i < this.row; i++) {

      newWorld[i][this.jhalarColumn] = true;

    }
    this.jhalarColumn++;
    if (this.jhalarColumn === this.column) {
      this.jhalarColumn = 0;
    }
    this.currentGeneration = newWorld;
  }

  moveToNextGeneration() {
    const nextGeneration = this.getNewWorld();

    for (let row = 0; row < this.row; row++) {
      for (let column = 0; column < this.column; column++) {
        const aliveNeighbours = this.getAliveNeighbours(row, column);    //CONWAY'S GAME OF LIFE #https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
        if (this.currentGeneration[row][column] === true) {
          if (aliveNeighbours < 2 || aliveNeighbours > 3) {
            nextGeneration[row][column] = false;
          }
          else {

            nextGeneration[row][column] = true;
          }
        }
        else {
          if (aliveNeighbours === 3) {
            nextGeneration[row][column] = true;
          }
          else {
            nextGeneration[row][column] = false;
          }
        }
      }
    }
    this.currentGeneration = nextGeneration;
  }
}





