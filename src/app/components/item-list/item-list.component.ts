import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() public products: Product[] = [];

  public constructor(private router: Router){}

  public chooseProduct(id: number) {
    this.router.navigate([`/product/${id}`])
  }
}
