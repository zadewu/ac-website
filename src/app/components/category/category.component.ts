import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  public products: Product[] = [];
  public brands: string[] = [];
  public selectedBrand = '';

  public constructor(private configService: ConfigurationService){}

  public ngOnInit(): void {
      this.products = this.configService.getProducts();
      this.brands = this.getBrands();
  }

  public select() {
    console.log(this.selectedBrand);
  }

  private getBrands(): string[] {
    return this.products.filter( (product: Product, index: number, arr: Product[]) => arr.findIndex(t => t.brand === product.brand) === index).map( (product: Product) => product.brand);
  }
}
