import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'event-bus';

@Component({
  selector: 'app-partner-info',
  templateUrl: './partner-info.component.html',
  styleUrls: ['./partner-info.component.css']
})
export class PartnerInfoComponent implements OnInit {

  message: string;

  constructor(private eventBus: EventBusService) { 

    eventBus.events.subscribe((msg: string) => {
      this.message = msg;
    });

  }

  ngOnInit(): void {

  }

}
