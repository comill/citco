import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import { AnalyticsService } from '../shared/analytics.service';
import { TodoComponent } from '../shared/todo/todo.component';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-lazy-view',
  template: `
    <h3>This is content from a lazy-loaded route</h3>
    <div>Check your Networks tab to see that the js file got loaded</div>
    <br>
    <div><em>/lazy/nested/</em> routes to the same page</div>
    <a [routerLink]="['/lazy/nested']" routerLinkActive="router-link-active" >lazy nested</a>
  `
})
export class LazyComponent {}


@Component({
  selector: 'app-lazy-view-nested',
  template: `
    <app-header></app-header>
    <app-map-simple></app-map-simple>
    <app-todo></app-todo>
    <h3>This is content from a lazy-loaded route</h3>
    <div>Check your Networks tab to see that the js file got loaded</div>
    <br>
    <div><em>/lazy/nested/</em> routes to the same page</div>
    <a [routerLink]="['/lazy']" routerLinkActive="router-link-active" >lazy</a>
  `
})
export class LazyComponentNested {}

@NgModule({
  declarations: [LazyComponent, LazyComponentNested],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'},
      { path: 'nested', component: LazyComponentNested, pathMatch: 'full'}
    ]),
    SharedModule
  ]
})
export class LazyModule {
  constructor(analytics:AnalyticsService){
    analytics.recordEvent();
  }

}
