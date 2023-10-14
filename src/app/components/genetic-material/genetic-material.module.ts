import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneticMaterialRoutingModule } from './genetic-material-routing.module';
import { GeneticMaterialComponent } from './genetic-material.component';
import { GeneticMaterialFormComponent } from './genetic-material-form/genetic-material-form.component';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from 'src/app/@core/services/services.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    GeneticMaterialComponent,
    GeneticMaterialFormComponent
  ],
  imports: [
    CommonModule,
    GeneticMaterialRoutingModule,
    ServicesModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class GeneticMaterialModule { }
