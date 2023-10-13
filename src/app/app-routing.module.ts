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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
