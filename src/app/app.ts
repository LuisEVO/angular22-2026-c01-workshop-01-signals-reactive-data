import { Component } from '@angular/core';

import { EventExplorer } from './events/event-explorer/event-explorer';

@Component({
  imports: [EventExplorer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
