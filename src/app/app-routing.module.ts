import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { FaqComponent } from './components/faq/faq.component';
import { WarrantyComponent } from './components/warranty/warranty.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'warranty',
        component: WarrantyComponent,
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'auth',
        component: AuthModalComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
