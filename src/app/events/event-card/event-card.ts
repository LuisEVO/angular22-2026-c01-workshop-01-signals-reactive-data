import { Component, computed, input } from '@angular/core';

import {
  CATEGORY_LABELS,
  CITY_LABELS,
  LOW_SEAT_THRESHOLD,
  MODALITY_LABELS,
} from '../event.constants';
import { Event } from '../event.model';

@Component({
  selector: 'app-event-card',
  styleUrl: './event-card.css',
  templateUrl: './event-card.html',
})
export class EventCard {
  readonly event = input.required<Event>();

  protected readonly cityLabels = CITY_LABELS;
  protected readonly categoryLabels = CATEGORY_LABELS;
  protected readonly modalityLabels = MODALITY_LABELS;
  protected readonly lowSeatThreshold = LOW_SEAT_THRESHOLD;

  protected readonly calendar = computed(() => {
    const [day = '', month = ''] = this.event().date.split(' ');
    return {
      day: day.padStart(2, '0'),
      month: month.slice(0, 3).toUpperCase(),
    };
  });

  protected readonly placeIcon = computed(() =>
    this.event().modality === 'online' ? 'sensors' : 'location_on',
  );

  protected readonly seatTone = computed(() => {
    const event = this.event();
    if (event.free) {
      return 'open';
    }
    return event.seats <= this.lowSeatThreshold ? 'urgent' : 'steady';
  });

  protected readonly seatLabel = computed(() => {
    const event = this.event();
    if (event.free) {
      return event.modality === 'online' ? 'Transmisión abierta' : 'Cupos libres';
    }
    return `${event.seats} cupos`;
  });
}
