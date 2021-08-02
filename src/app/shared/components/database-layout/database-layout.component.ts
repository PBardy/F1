import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-database-layout',
  templateUrl: './database-layout.component.html',
  styleUrls: ['./database-layout.component.scss']
})
export class DatabaseLayoutComponent implements OnInit {

  @Input() pageTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
