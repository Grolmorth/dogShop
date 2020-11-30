import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { NavDisplayItemComponent } from './components/nav/nav-display-item/nav-display-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './components/content/display/display.component';
import { KarmaComponent } from './components/content/karma/karma.component';
import { KarmaSuchaComponent } from './components/content/karma-sucha/karma-sucha.component';
import { KarmaMokraComponent } from './components/content/karma-mokra/karma-mokra.component';
import { PrzekaskiINapojeComponent } from './components/content/przekaski-i-napoje/przekaski-i-napoje.component';
import { BarfKarmaMrozonaComponent } from './components/content/barf-karma-mrozona/barf-karma-mrozona.component';
import { SuplementyIHodowlaComponent } from './components/content/suplementy-i-hodowla/suplementy-i-hodowla.component';
import { MiejsceDoSpaniaComponent } from './components/content/miejsce-do-spania/miejsce-do-spania.component';
import { LegowiskaComponent } from './components/content/legowiska/legowiska.component';
import { PoduszkiComponent } from './components/content/poduszki/poduszki.component';
import { MateraceComponent } from './components/content/materace/materace.component';
import { KoceComponent } from './components/content/koce/koce.component';
import { KoszeComponent } from './components/content/kosze/kosze.component';
import { BudyComponent } from './components/content/budy/budy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,

    NavDisplayItemComponent,

    DisplayComponent,

    KarmaComponent,

    KarmaSuchaComponent,

    KarmaMokraComponent,

    PrzekaskiINapojeComponent,

    BarfKarmaMrozonaComponent,

    SuplementyIHodowlaComponent,

    MiejsceDoSpaniaComponent,

    LegowiskaComponent,

    PoduszkiComponent,

    MateraceComponent,

    KoceComponent,

    KoszeComponent,

    BudyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
