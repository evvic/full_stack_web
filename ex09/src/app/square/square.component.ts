import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <div class="square"> </div>
  `,
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
