import { Component } from '@angular/core';

@Component({
  selector: 'app-serie',
  imports: [],
  templateUrl: './serie.html',
  styleUrl: './serie.css',
})
export class Serie {
      constructor(
        public id: number,
        public name: string,
        public channel: string,
        public seasons: number,
        public description: string,
        public webpage: string,
        public image: string
    ) {}
}
