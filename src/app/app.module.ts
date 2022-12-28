import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChronologicalComponent } from './chronological/chronological.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { ProgrammaticComponent } from './programmatic/programmatic.component';
import { LocationComponent } from './location/location.component';
import { StyleComponent } from './style/style.component';
import { StructureDetailsComponent } from './structure-details/structure-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ChronologicalComponent,
    AlphabeticalComponent,
    ProgrammaticComponent,
    LocationComponent,
    StyleComponent,
    StructureDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
