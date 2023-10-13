import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecieRoutingModule } from './specie-routing.module';
import { SpecieComponent } from './specie.component';


@NgModule({
  declarations: [
    SpecieComponent
  ],
  imports: [
    CommonModule,
    SpecieRoutingModule,
  ]
})
export class SpecieModule { }
