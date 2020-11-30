import { BudyComponent } from './components/content/budy/budy.component';
import { KoszeComponent } from './components/content/kosze/kosze.component';
import { KoceComponent } from './components/content/koce/koce.component';
import { MateraceComponent } from './components/content/materace/materace.component';
import { PoduszkiComponent } from './components/content/poduszki/poduszki.component';
import { LegowiskaComponent } from './components/content/legowiska/legowiska.component';
import { MiejsceDoSpaniaComponent } from './components/content/miejsce-do-spania/miejsce-do-spania.component';
import { SuplementyIHodowlaComponent } from './components/content/suplementy-i-hodowla/suplementy-i-hodowla.component';
import { BarfKarmaMrozonaComponent } from './components/content/barf-karma-mrozona/barf-karma-mrozona.component';
import { PrzekaskiINapojeComponent } from './components/content/przekaski-i-napoje/przekaski-i-napoje.component';
import { KarmaMokraComponent } from './components/content/karma-mokra/karma-mokra.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { KarmaComponent } from './components/content/karma/karma.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './components/content/display/display.component';
import { KarmaSuchaComponent } from './components/content/karma-sucha/karma-sucha.component';


const routes: Routes = [
  {
    path: '',
    component: DisplayComponent,
    pathMatch: 'full'
  },
  {
    path: 'karma',
    children: [
      {
        path: '',
        component: KarmaComponent
      },
      {
        path: 'karma-sucha',
        component: KarmaSuchaComponent,
      },
      {
        path: 'karma-mokra',
        component: KarmaMokraComponent,
      },
      {
        path: 'przekaski-i-napoje',
        component: PrzekaskiINapojeComponent,
      },
      {
        path: 'barf-karma-mrozona',
        component: BarfKarmaMrozonaComponent,
      },
      {
        path: 'suplementy-i-hodowla',
        component: SuplementyIHodowlaComponent,
      },
    ]
  },
  {
    path: 'miejsca-do-spania',
    children: [
      {
        path: '',
        component: MiejsceDoSpaniaComponent,
      },
      {
        path: 'legowiska',
        component: LegowiskaComponent,
      },
      {
        path: 'poduszki',
        component: PoduszkiComponent,
      },
      {
        path: 'materace',
        component: MateraceComponent,
      },
      {
        path: 'koce',
        component: KoceComponent,
      },
      {
        path: 'kosze',
        component: KoszeComponent,
      },
      {
        path: 'budy',
        component: BudyComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
