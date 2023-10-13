import { CreateSpecieModule } from './create-specie/create-specie.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecieComponent } from './specie.component';

const routes: Routes = [
  { path: '', component: SpecieComponent},
  {
    path: 'new',
    loadChildren: () =>
      import('./create-specie/create-specie.module').then((m) => m.CreateSpecieModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecieRoutingModule { }
