import { Component } from '@angular/core';

@Component({
  selector: 'app-series-list',
  templateUrl: 'series-list.component.html'
})
export class SeriesListComponent {

  public series = [{
    id: 1,
    nome: 'Futurama',
    dataLancamento: '10 de Nov de 2000',
    temporadas: 5,
    nota: 4.0
  },
  {
    id: 2,
    nome: 'The Simpsons',
    dataLancamento: '10 de Dez de 1989',
    temporadas: 30,
    nota: 4.9
  },
  {
    id: 3,
    nome: 'Rick and Morty',
    dataLancamento: '10 de Fev de 2018',
    temporadas: 4,
    nota: 5
  }
  ];

}