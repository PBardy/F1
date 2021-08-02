import { Component, Input, OnInit } from '@angular/core';
import { Constructor } from 'src/app/definitions';

@Component({
  selector: 'app-constructor-card',
  templateUrl: './constructor-card.component.html',
  styleUrls: ['./constructor-card.component.scss']
})
export class ConstructorCardComponent implements OnInit {

  @Input() team: Constructor;

  constructor() { }

  ngOnInit(): void {
    console.log(this.team);
  }

}
