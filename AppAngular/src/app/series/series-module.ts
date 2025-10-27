import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesList } from './series-list/series-list';

@NgModule({
  imports: [
    CommonModule,
    SeriesList
  ],
  exports: [SeriesList]
})
export class SeriesModule { }
