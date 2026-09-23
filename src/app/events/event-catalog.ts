import { Service, computed, signal } from '@angular/core';
import { debounce, form } from '@angular/forms/signals';

import { EVENTS } from './event.data';
import { City, EventCategory, EventModality } from './event.model';

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

  readonly filteredEvents = computed(() => {
    const { query, city, category, modality } = this.filters();
    const search = query.trim().toLowerCase();

    return EVENTS.filter((event) => {
      const matchesSearch = search === '' || event.name.toLowerCase().includes(search);
      const matchesCity = city === 'all' || event.city === city;
      const matchesCategory = category === 'all' || event.category === category;
      const matchesModality = modality === 'all' || event.modality === modality;

      return matchesSearch && matchesCity && matchesCategory && matchesModality;
    });
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
