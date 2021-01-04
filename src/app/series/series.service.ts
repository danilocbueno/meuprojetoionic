import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private series = [{
    id: 1,
    nome: 'Futurama',
    dataLancamento: '10 de Nov de 2000',
    temporadas: 5,
    nota: 1.5
  },
  {
    id: 2,
    nome: 'The Simpsons',
    dataLancamento: '10 de Dez de 1989',
    temporadas: 30,
    nota: 3.2
  },
  {
    id: 3,
    nome: 'Rick and Morty',
    dataLancamento: '10 de Fev de 2018',
    temporadas: 4,
    nota: 3.9
  },
  {
    id: 4,
    nome: 'American Dad',
    dataLancamento: '02 de Abr de 2000',
    temporadas: 10,
    nota: 4.5
  },
  {
    id: 5,
    nome: 'Breaking Bad',
    dataLancamento: '13 de Mai de 2009',
    temporadas: 5,
    nota: 5
  }
  ];

  constructor() { }

  //SELECT ALL (READ)
  pegarTodasSeries() { 
    return this.series;
  }

  //SELECT ONE (READ)
  pegarSeriePorId(idSerie) {
    let serie = null;
    for(let i=0; i< this.series.length; i++) {
      if(this.series[i].id == idSerie) {
        serie = this.series[i];
        break; //parar a iteração do FOR
      }

    }
    return serie;
  }

  //INSERT (CREATE)
  adicionarSerie(serie) {
    if(serie.id == null) {
      //adicionar!
      this.series.push(serie);
    } else {
      this.atualizarSerie(serie);
    }
  }

  //UPDATE
  atualizarSerie(serie) {
      //descobrir aonde está o elemento na lista! (this.series)
      //substituir (trocar o elemento anterior pelo atual)
      for(let i=0; i< this.series.length; i++) {
        if(this.series[i].id == serie.id) { //encontrei a serie que estou buscando!
          this.series[i] = serie; //troco o elemento antigo pelo novo!
          break; //parar a iteração do FOR
        }
      }
  }

  //DELETE
  removerSeriePorId(idSerie) {
    //seu CODIGO vem aqui!

    for(let i=0; i< this.series.length; i++) {
      if(this.series[i].id == idSerie) {
        this.series.splice(i, 1);
        break; //parar a iteração do FOR
      }

    }
    console.log(this.series);
  }

  //UPDATE
}
