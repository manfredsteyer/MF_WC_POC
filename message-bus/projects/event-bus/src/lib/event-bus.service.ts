import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  readonly events = new ReplaySubject(10);

  constructor() { }
}