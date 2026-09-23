import { Component } from '@angular/core';

import { EventCard } from '../event-card/event-card';
import {
  CATEGORY_OPTIONS,
  CITY_OPTIONS,
  MODALITY_OPTIONS,
} from '../event.constants';
import { EVENTS } from '../event.data';

@Component({
  imports: [EventCard],
  selector: 'app-event-explorer',
  styleUrl: './event-explorer.css',
  templateUrl: './event-explorer.html',
})
export class EventExplorer {
  protected readonly events = EVENTS;
  protected readonly cityOptions = CITY_OPTIONS;
  protected readonly categoryOptions = CATEGORY_OPTIONS;
  protected readonly modalityOptions = MODALITY_OPTIONS;
}
