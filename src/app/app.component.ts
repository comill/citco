import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-landing></app-landing>
  `,
  styles: [`
  `]
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        if (window && (<any>window).ga) {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');

        }
      }
    });
  }
}
