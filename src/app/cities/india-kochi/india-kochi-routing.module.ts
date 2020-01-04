import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaKochiHomeComponent } from './india-kochi-home/india-kochi-home.component';

const routes: Routes = [
  { path: '', component: IndiaKochiHomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiaKochiRoutingModule { }
