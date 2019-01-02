import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroComponent } from './hero/hero.component';
import { HeroService } from './hero.service';
import {HttpClientModule} from '@angular/common/http';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {FormsModule} from '@angular/forms';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
   routingComponent,
   PageNotFoundComponent,
   HeroComponent,
   HeroDetailComponent,
   HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
