import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{
  public products: Product[] = [];
  public constructor(private configService: ConfigurationService){}
  
  public ngOnInit(): void {
    const initialProducts = this.configService.getProducts();
    if (initialProducts.length > 12) {
      this.products = initialProducts.slice(0, 12);
    } else {
      this.products = initialProducts;
    }
  }
}
