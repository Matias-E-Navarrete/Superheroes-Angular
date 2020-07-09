import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Routes

import { APP_ROUTING } from './app.routes';

//Services

import { HeroesService } from './services/heroes.services';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeInfoComponent } from './components/heroe-info/heroe-info.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    AboutComponent,
    HeroeInfoComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
