import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: SquareComponent[] = [];
  send: String
  temp: SquareComponent = new SquareComponent;

  constructor() { 
    this.send = 'black'
  }

  ngOnInit(): void {
    //this.squares = Array(8).fill(Array(8).fill(null))
    //this.squares = 
    //this.squares = this.generateSquares("black")
  }


  generateRows() {
    var init_color = "black"
    var rows = []
    

    for(let i = 0; i < 8; i++) {
      init_color = (init_color === "white")? "black" : "white"
      rows[i] = SquareComponent ///<div class="row">this.generateSquares(init_color)></div>
    }

    return rows
  }


  generateSquares(init_color: String) {
    var color = init_color
    var row = []

    for(let i = 0; i < 8; i++) {
      row[i] = {SquareComponent}
    }
    return row
  }

  

}
