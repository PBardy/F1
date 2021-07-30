import { Component, Input, OnInit } from '@angular/core';
import { ScheduledEvent } from 'src/app/definitions';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() event: ScheduledEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
