import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { ProductionComponent } from './production/production.component';
import { InquiryComponent } from './inquiry/inquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductsComponent,
    ProductionComponent,
    InquiryComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent, pathMatch: 'full'},
      { path: 'products', component: ProductsComponent, pathMatch: 'full'},
      { path: 'production', component: ProductionComponent, pathMatch: 'full'},
      { path: 'about', component: AboutUsComponent, pathMatch: 'full'},
      { path: 'contact', component: ContactUsComponent, pathMatch: 'full'},
      { path: 'inquiry', component: InquiryComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      // { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},
      // { path: 'academy', loadChildren: './academy/academy.module#AcademyModule'},   
      // { path: 'technology', loadChildren: './technology/technology.module#TechnologyModule'},   
      { path: 'india-kochi', loadChildren: './cities/india-kochi/india-kochi.module#IndiaKochiModule'},   
    ]),
    TransferHttpCacheModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
