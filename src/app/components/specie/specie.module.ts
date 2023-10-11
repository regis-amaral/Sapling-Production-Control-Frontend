import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecieRoutingModule } from './specie-routing.module';
import { SpecieComponent } from './specie.component';
import { CreateSpecieComponent } from './create-specie/create-specie.component';


@NgModule({
  declarations: [
    SpecieComponent,
    CreateSpecieComponent
  ],
  imports: [
    CommonModule,
    SpecieRoutingModule
  ]
})
export class SpecieModule { }
