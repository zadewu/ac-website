import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public constructor() { }

  public loadInitialData() {
    return new Promise<void>((resolve, reject) => {
      let visitors = localStorage.getItem('visitor-counter');
      if (visitors) {
        visitors = String(Number(visitors) + 1);
      } else {
        visitors = String(Math.floor(Math.random() * 1000));
      }
      localStorage.setItem('visitor-counter', visitors);
      resolve();
    });
  }

  public getVisitors(): number {
    let visitors = localStorage.getItem('visitor-counter');
    return Number(visitors);
  }
}
