import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSpecieComponent } from './create-specie.component';
import { CreateSpecieRoutingModule } from './create-specie-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExportModule } from '../shared/material.module';

@NgModule({
  declarations: [
    CreateSpecieComponent
  ],
  imports: [
    CommonModule,
    CreateSpecieRoutingModule,
    MaterialExportModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CreateSpecieModule { }
