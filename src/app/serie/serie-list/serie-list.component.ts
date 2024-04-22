import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons: number = 0; // Nueva propiedad para el promedio de temporadas

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void { 
    const totalSeasons = this.series.reduce((total, serie) => total + serie.seasons, 0); // Sumar todas las temporadas
    this.averageSeasons = totalSeasons / this.series.length; // Calcular el promedio
  }
 
  ngOnInit() {
    this.getSeries();
  }


}
