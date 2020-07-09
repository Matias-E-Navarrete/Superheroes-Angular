
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeInfoComponent } from './components/heroe-info/heroe-info.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe-info/:id', component: HeroeInfoComponent },
    { path: 'busqueda/:termino', component: BusquedaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);