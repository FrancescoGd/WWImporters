import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ItemsComponent } from './items/items.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { InStockItemsPipe } from './in-stock-items.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CategoriesComponent,
    ItemComponent,
    HeaderComponent,
    CategoryComponent,
    HomeComponent,
    ShoppingPageComponent,
    ShoppingCartComponent,
    ContactFormComponent,
    AboutPageComponent,
    InStockItemsPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
