import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SeriesListComponent } from './series/series-list.component';
import { SeriesInfoComponent } from './series/series-info.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { FilmesListComponent } from './filmes/filmes-list.component';

@NgModule({
  declarations: [AppComponent, 
    SeriesListComponent, 
    SeriesInfoComponent,
    AvaliacaoComponent,
    FilmesListComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
