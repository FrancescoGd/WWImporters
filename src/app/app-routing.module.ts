import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ItemComponent } from './item/item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  // rubric13
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},

  // rubric32
  { path: 'shopping', component: ShoppingPageComponent },
  // rubric46
  { path: 'product/:itemName', component: ItemComponent },
  // rubric56
  { path: 'cart', component: ShoppingCartComponent },
  // rubric62
  { path: 'contact', component: ContactFormComponent },
  // rubric64
  { path: 'about', component: AboutPageComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
