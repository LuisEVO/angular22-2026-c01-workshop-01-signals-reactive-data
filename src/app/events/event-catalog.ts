import { Service, computed, signal } from '@angular/core';

import { EVENTS } from './event.data';
import { City, EventCategory, EventModality } from './event.model';
import { AllFilter } from './event.constants';

@Service()
export class EventCatalog {
  readonly query = signal('');

  readonly city = signal<City | AllFilter>('all');

  readonly category =
    signal<EventCategory | AllFilter>('all');

  readonly modality =
    signal<EventModality | AllFilter>('all');

  readonly filteredEvents = computed(() => {
    const query = this.query().trim().toLowerCase();
    const city = this.city();
    const category = this.category();
    const modality = this.modality();

    return EVENTS.filter((event) => {
      const matchesSearch = query === '' || event.name.toLowerCase().includes(query);
      const matchesCity = city === 'all' || event.city === city;
      const matchesCategory = category === 'all' || event.category === category;
      const matchesModality = modality === 'all' || event.modality === modality;

      return matchesSearch && matchesCity && matchesCategory && matchesModality;
    });
  });

  reset(): void {
    this.query.set('');
    this.city.set('all');
    this.category.set('all');
    this.modality.set('all');
  }
}
