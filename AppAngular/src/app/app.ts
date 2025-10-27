import { Component, signal } from '@angular/core';
import { SeriesList } from './series/series-list/series-list';

@Component({
  selector: 'app-root',
  imports: [SeriesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AppAngular');
}
