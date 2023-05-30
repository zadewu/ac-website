import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private readonly CONFIG_FILE_URL = 'assets/data.json';
  private products: Product[] = [];
  public constructor(private http: HttpClient) { }

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

  public loadInitialProducts() {
    return new Promise<void>((resolve, reject) => {
      this.http
        .get<Product[]>(this.CONFIG_FILE_URL)
        .subscribe((response) => {
          this.products = response;
        })
        .add(() => resolve());
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public getVisitors(): number {
    let visitors = localStorage.getItem('visitor-counter');
    return Number(visitors);
  }
}
