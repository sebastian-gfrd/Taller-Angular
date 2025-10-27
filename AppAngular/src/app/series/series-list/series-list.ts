import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../serie/serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-list.html',
  styleUrl: './series-list.css',
})
export class SeriesList implements OnInit {
  series: Array<Serie> = [];
  averageSeasons: number = 0;
  selectedSerie?: Serie;
  private seriesService = inject(SeriesService);

  getSeries() {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    this.averageSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0) / this.series.length;
  }

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }
}
