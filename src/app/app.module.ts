import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChronologicalComponent } from './chronological/chronological.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { ProgrammaticComponent } from './programmatic/programmatic.component';
import { LocationComponent } from './location/location.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    ChronologicalComponent,
    AlphabeticalComponent,
    ProgrammaticComponent,
    LocationComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
