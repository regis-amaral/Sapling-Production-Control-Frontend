import { CreateSpecieModule } from './components/specie/create-specie/create-specie.module';
import { SpecieModule } from './components/specie/specie.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'specie',
    loadChildren: () =>
      import('./components/specie/specie.module').then((m) => m.SpecieModule),
  },
  {
    path: 'specie/new',
    loadChildren: () =>
      import('./components/specie/create-specie/create-specie.module').then((m) => m.CreateSpecieModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
