import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { MapSimpleComponent } from './map-simple/map-simple.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LazyLoadDirective } from './lazy-load-directive/LazyLoadDirective';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TodoComponent, MapSimpleComponent, HeaderComponent, FooterComponent, LazyLoadDirective, HomeBannerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeBannerComponent,
    TodoComponent,
    MapSimpleComponent,
    HeaderComponent,
    FooterComponent,
    LazyLoadDirective,
  ]
})
export class SharedModule { }
