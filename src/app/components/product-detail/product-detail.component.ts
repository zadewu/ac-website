import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  public selectedProduct: Product | undefined;
  public selectedImageUrl: string | undefined;
  public selectedColor: string | undefined;
  public selectedProductDetail: string | undefined;
  public previewImages: PreviewImage[] = [];
  private selectedIndex = 0;
  private $colorObservable: Subject<string> = new Subject();
  private subscription = new Subscription();

  public constructor(private route: ActivatedRoute, private configService: ConfigurationService ){}
  
  public ngOnInit(): void {
    window.scrollTo(0,0);
    this.selectedProduct = this.configService.findProductBy(this.route.snapshot.params['id']);
    this.selectedColor = 'white';
    this.selectedProductDetail = 'spec';
    this.initPreviewImage(this.selectedColor);
    this.subscription.add(
      this.$colorObservable.asObservable().subscribe((value) => {
        this.selectedColor = value;
        this.initPreviewImage(this.selectedColor);
      })
    );
  }

  public isSelectedImage(name: string): boolean {
    if (!name) {
      return false;
    }
    return this.previewImages[this.selectedIndex].name === name;
  }

  public onSelectImage(value: number): void {
    this.selectedIndex = value;
    this.selectedImageUrl = this.previewImages[this.selectedIndex].url;
  }

  public onSelectProductDetail(value: string): void {
    this.selectedProductDetail = value;
  }

  public selectColor(value: string) {
    this.selectedColor = value;
    this.$colorObservable.next(value);
  }

  private initPreviewImage(color: string) {
    if(!color || color === 'grey') {
      this.previewImages = [
        {
        name: 'grey1',
        url: 'assets/images/ac/detail/split/split2_1.png'
        },
        {
          name: 'grey2',
        url: 'assets/images/ac/detail/split/split2_2.png'
        },
        {
          name: 'grey3',
          url: 'assets/images/ac/detail/split/split2_3.png'
        },
      ]
    }
    if(color === 'white') {
      this.previewImages = [
        {
        name: 'white1',
        url: 'assets/images/ac/detail/split/split1_1.png'
        },
        {
          name: 'white2',
        url: 'assets/images/ac/detail/split/split1_2.png'
        },
        {
          name: 'white3',
          url: 'assets/images/ac/detail/split/split1_3.png'
        },
      ]
    }
    this.selectedImageUrl = this.previewImages[this.selectedIndex].url;
  }
}

interface PreviewImage {
  name: string;
  url: string;
}
