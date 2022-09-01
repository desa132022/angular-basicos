import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ListadoComponent } from './heroes/listado/listado.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
    //ContadorComponent
  
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
