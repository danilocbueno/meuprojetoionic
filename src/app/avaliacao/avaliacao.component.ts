import { Component, Input, OnInit } from '@angular/core';

@Component({
    templateUrl: "avaliacao.component.html",
    selector: "app-avaliacao"
})

export class AvaliacaoComponent implements OnInit {

    @Input()
    public nota = 0;
    public icones = [];

    ngOnInit() {
        console.log(this.nota);
        //dependendo do valor da nota, o valor do vetor vai ser alterado..

        //3
        //icones = ["heart", "heart", "heart", "heart-outline", "heart-outline"];

        //2.5
        //icones = ["heart", "heart", "heart-half-outline", "heart-outline", "heart-outline"]
    }

}