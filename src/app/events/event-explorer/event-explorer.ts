import { Component, inject } from '@angular/core';

import { EventCard } from '../event-card/event-card';
import { EventCatalog } from '../event-catalog';
import { CATEGORY_OPTIONS, CITY_OPTIONS, MODALITY_OPTIONS } from '../event.constants';
import { City, EventCategory, EventModality } from '../event.model';

@Component({
  imports: [EventCard],
  selector: 'app-event-explorer',
  styleUrl: './event-explorer.css',
  templateUrl: './event-explorer.html',
})
export class EventExplorer {
  protected readonly catalog = inject(EventCatalog);
  protected readonly cityOptions = CITY_OPTIONS;
  protected readonly categoryOptions = CATEGORY_OPTIONS;
  protected readonly modalityOptions = MODALITY_OPTIONS;

  protected setQuery(value: string): void {
    this.catalog.query.set(value);
  }

  protected setCity(value: string): void {
    this.catalog.city.set(value as City | 'all');
  }

  protected setCategory(value: string): void {
    this.catalog.category.set(value as EventCategory | 'all');
  }

  protected setModality(value: string): void {
    this.catalog.modality.set(value as EventModality | 'all');
  }
}
