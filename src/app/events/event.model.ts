export type City = 'lima' | 'bogota' | 'santiago';

export type EventCategory = 'frontend' | 'backend' | 'cloud' | 'ai';

export type EventModality = 'presencial' | 'online' | 'hibrido';

export interface Speaker {
  name: string;
  role: string;
  avatar: string;
}

export interface Event {
  id: number;
  name: string;
  city: City;
  category: EventCategory;
  modality: EventModality;
  date: string;
  venue: string;
  summary: string;
  speaker: Speaker;
  seats: number;
  popular: boolean;
  free: boolean;
}
