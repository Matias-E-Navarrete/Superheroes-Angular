import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  heroe: any = {};
  termino: string;

  constructor(private activatedRouter: ActivatedRoute, private _heroesService: HeroesService, private router:Router) { 
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
        this.heroes = this._heroesService.buscarHeroes( params['termino'] );
        this.termino = params['termino'];
      }
    );
  }
}
