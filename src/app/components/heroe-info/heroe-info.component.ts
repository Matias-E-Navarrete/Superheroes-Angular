import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe-info',
  templateUrl: './heroe-info.component.html',
})
export class HeroeInfoComponent implements OnInit {

  heroe:any = {};

  constructor( 
    private activeRouter: ActivatedRoute,
    private _heroeServices: HeroesService
  ) { 
    this.activeRouter.params.subscribe( params => {
      this.heroe = _heroeServices.getHeroe( params['id'] );
    } );
  }

  ngOnInit(): void {
  }

}
