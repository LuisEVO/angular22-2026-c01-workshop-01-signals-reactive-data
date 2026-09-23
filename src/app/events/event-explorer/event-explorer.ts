import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { EventCard } from '../event-card/event-card';
import { EventCatalog } from '../event-catalog';
import { CATEGORY_OPTIONS, CITY_OPTIONS, MODALITY_OPTIONS } from '../event.constants';

@Component({
  imports: [EventCard, FormField],
  selector: 'app-event-explorer',
  styleUrl: './event-explorer.css',
  templateUrl: './event-explorer.html',
})
export class EventExplorer {
  protected readonly catalog = inject(EventCatalog);
  protected readonly cityOptions = CITY_OPTIONS;
  protected readonly categoryOptions = CATEGORY_OPTIONS;
  protected readonly modalityOptions = MODALITY_OPTIONS;
}
