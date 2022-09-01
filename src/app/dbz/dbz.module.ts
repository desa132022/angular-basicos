import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    //FormsModule sirve para trabajar con formularios
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
