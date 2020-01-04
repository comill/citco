import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaKochiRoutingModule } from './india-kochi-routing.module';
import { IndiaKochiHomeComponent } from './india-kochi-home/india-kochi-home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [IndiaKochiHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndiaKochiRoutingModule
  ]
})
export class IndiaKochiModule { }
