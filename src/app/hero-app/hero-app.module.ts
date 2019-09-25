import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroAppComponent } from './hero-app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroAppRoutingModule } from './hero-app-routing.module';

import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule,
    HeroAppRoutingModule
  ],
  declarations: [
    HeroAppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  exports: [
    HeroSearchComponent
  ]
})
export class HeroAppModule { }
