import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroAppComponent } from './hero-app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  { path: '', component: HeroAppComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroAppRoutingModule { }
