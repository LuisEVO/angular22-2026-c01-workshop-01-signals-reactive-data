import { httpResource } from '@angular/common/http';
import { Service, signal } from '@angular/core';
import { debounce, form } from '@angular/forms/signals';

import { City, Event, EventCategory, EventModality } from './event.model';

@Service()
export class EventCatalog {
  readonly filters = signal({
    query: '',
    city: 'all' as City | 'all',
    category: 'all' as EventCategory | 'all',
    modality: 'all' as EventModality | 'all',
  });

  readonly filtersForm = form(this.filters, (path) => {
    debounce(path.query, 350);
  });

  readonly events = httpResource<Event[]>(() => {
    const { query, city, category, modality } = this.filters();
    const q = query.trim();

    return {
      url: '/api/events',
      params: {
        q: q,
        city: city,
        category: category,
        modality: modality,
      },
    };
  });

  reset(): void {
    this.filters.set({
      query: '',
      city: 'all',
      category: 'all',
      modality: 'all',
    });
  }
}
