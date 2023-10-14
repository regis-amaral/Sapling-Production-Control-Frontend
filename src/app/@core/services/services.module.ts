import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpecieService } from './specie-service';
import { GeneticMaterialService } from './genetic-material-service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SpecieService,
    GeneticMaterialService
  ]
})
export class ServicesModule { }
