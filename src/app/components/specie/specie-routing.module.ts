import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecieComponent } from './specie.component';

const routes: Routes = [
  { path: '', component: SpecieComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecieRoutingModule { }
