import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneticMaterialComponent } from './genetic-material.component';

const routes: Routes = [
  { path: '', component: GeneticMaterialComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneticMaterialRoutingModule { }
