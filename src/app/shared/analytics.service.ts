import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  public recordEvent(){
    console.log('Attempting to record event');

    // if((<any>window).ga){
    //   (<any>window).ga('send', {
    //     hitType: 'event',
    //     eventCategory: 'Videos',
    //     eventAction: 'play',
    //     eventLabel: 'Fall Campaign'
    //   });
  
      // (<any>window).ga('send', 'event', 'EEeventCategory', 'EEeventAction', 'EEeventLabel', 'EEeventValue', 'fieldsObject');
      //  (<any>window).ga('send', 'event', {
      //   eventCategory: 'eventCategory',
      //   eventLabel: 'eventLabel',
      //   eventAction: 'eventAction',
      //   eventValue: 10
      // });  
    // }
  }
}
