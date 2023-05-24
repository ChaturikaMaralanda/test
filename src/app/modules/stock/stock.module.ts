import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { OutOfStockproductComponent } from './out-of-stockproduct/out-of-stockproduct.component';
import { AllProductComponent } from './all-product/all-product.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';





@NgModule({
  declarations: [
    StockComponent,
    OutOfStockproductComponent,
    AllProductComponent,


  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    BrowserModule,
    AppRoutingModule, FormsModule
  ]
})
export class StockModule { }
