import { City, EventCategory, EventModality } from './event.model';

export const ALL_FILTER = 'all' as const;

export type AllFilter = typeof ALL_FILTER;

export interface FilterOption<T extends string> {
  value: T | AllFilter;
  label: string;
}

export interface QuickFilter {
  id: 'all' | 'popular' | EventCategory | 'free';
  label: string;
  icon?: string;
}

export const LOW_SEAT_THRESHOLD = 12;

export const CITY_OPTIONS: readonly FilterOption<City>[] = [
  { value: 'all', label: 'Todas las sedes' },
  { value: 'lima', label: 'Lima, PE' },
  { value: 'bogota', label: 'Bogotá, CO' },
  { value: 'santiago', label: 'Santiago, CL' },
];

export const CATEGORY_OPTIONS: readonly FilterOption<EventCategory>[] = [
  { value: 'all', label: 'Todas' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'cloud', label: 'Cloud / DevOps' },
  { value: 'ai', label: 'Inteligencia Artificial' },
];

export const MODALITY_OPTIONS: readonly FilterOption<EventModality>[] = [
  { value: 'all', label: 'Cualquiera' },
  { value: 'presencial', label: 'Presencial' },
  { value: 'online', label: 'Online / Streaming' },
  { value: 'hibrido', label: 'Híbrido' },
];

export const CITY_LABELS: Record<City, string> = {
  lima: 'Lima',
  bogota: 'Bogotá',
  santiago: 'Santiago',
};

export const CATEGORY_LABELS: Record<EventCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  cloud: 'Cloud',
  ai: 'Inteligencia Artificial',
};

export const MODALITY_LABELS: Record<EventModality, string> = {
  presencial: 'Presencial',
  online: 'Online',
  hibrido: 'Híbrido',
};
