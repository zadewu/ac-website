import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.scss']
})
export class SimilarProductComponent implements OnInit{
  public products: Product[] = [];

  public constructor(private configService: ConfigurationService){}

  public ngOnInit(): void {
    const similarProduct = this.configService.getProducts();
    this.products = similarProduct.slice(0,4);
  }
}
