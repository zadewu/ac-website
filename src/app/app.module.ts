import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { BannerComponent } from './components/banner/banner.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConfigurationService } from './services/configuration/configuration.service';
import { initializeApp, initializeProducts } from './app.loader';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { FaqComponent } from './components/faq/faq.component';
import { WarrantyComponent } from './components/warranty/warranty.component';
import { RatingComponent } from './components/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { SimilarProductComponent } from './components/similar-product/similar-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CategoryComponent,
    BannerComponent,
    OverviewComponent,
    ItemListComponent,
    FooterComponent,
    ContactComponent,
    AuthModalComponent,
    FaqComponent,
    WarrantyComponent,
    RatingComponent,
    ProductDetailComponent,
    ReviewListComponent,
    SimilarProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps:[ConfigurationService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeProducts,
      deps:[ConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
