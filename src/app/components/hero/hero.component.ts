import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor
  ( 
    private _heroesService: HeroesService,
    private router: Router
    ) {}

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();

  }
  verHeroe(id: number){
    this.router.navigate( [ '/heroe-info', id ] );
  }

}


