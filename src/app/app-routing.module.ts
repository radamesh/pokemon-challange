import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsComponent } from './pokemons/pokemons.component'
import { DetailsComponent } from './details/details.component'

const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonsComponent,
    data: { title: ''}
  },
  {
    path: 'pokemons-details/:id',
    component: DetailsComponent,
    data: { title: ''}
  },
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
