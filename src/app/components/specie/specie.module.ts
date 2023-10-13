import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecieRoutingModule } from './specie-routing.module';
import { SpecieComponent } from './specie.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SpecieFormComponent } from './specie-form/specie-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from 'src/app/@core/services/services.module';

@NgModule({
  declarations: [
    SpecieComponent,
    SpecieFormComponent
  ],
  imports: [
    CommonModule,
    SpecieRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ServicesModule
  ]
})
export class SpecieModule { }
