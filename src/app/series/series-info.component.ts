import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from './series.service';

@Component({
    selector: "app-series-info",
    templateUrl: "series-info.component.html"
})

export class SeriesInfoComponent implements OnInit {

    public serie;

    constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService) { }

    ngOnInit() { 
        const id = this.activatedRoute.snapshot.paramMap.get("id"); //ta vindo via URL!
        this.serie = this.seriesService.pegarSeriePorId(id); //Pegando uma serie lá do serviço!
    }

}