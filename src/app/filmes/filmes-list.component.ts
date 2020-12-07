import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.scss'],
})
export class FilmesListComponent implements OnInit {

  public filmes = [{
    id: 1,
    nome: "Clube da Luta",
    nota: 5
  },
  {
    id: 2,
    nome: "Senhor dos Aneis",
    nota: 5
  },
  {
    id: 3,
    nome: "Jonh Wick",
    nota: 4.9
  }];

  constructor() { }

  ngOnInit() {}

}
