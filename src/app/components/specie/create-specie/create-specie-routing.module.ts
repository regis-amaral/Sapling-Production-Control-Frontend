import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSpecieComponent } from './create-specie.component';

const routes: Routes = [
  {path: '', component: CreateSpecieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSpecieRoutingModule { }
