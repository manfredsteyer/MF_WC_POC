import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'event-bus';

@Component({
  selector: 'app-markt-hochladen',
  templateUrl: './markt-hochladen.component.html',
  styleUrls: ['./markt-hochladen.component.css']
})
export class MarktHochladenComponent implements OnInit {

  message: string;

  constructor() {
    const eventBus = (window as any).eventBus as EventBusService;
    if (!eventBus) {
      return;
    }

    eventBus.events.subscribe((msg: string) => {
      console.log('received msg in markt-hochladen', msg);
      this.message = msg;
    });

  }

  ngOnInit(): void {
  }

}
