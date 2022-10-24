import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronologicalComponent } from './chronological/chronological.component';

const routes: Routes = [
  { path: 'chronological', component: ChronologicalComponent },
  { path: '', redirectTo: 'chronological', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}