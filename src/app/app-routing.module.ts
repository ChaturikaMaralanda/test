import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { CurruntStockProductComponent } from './modules/stock/currunt-stock-product/currunt-stock-product.component';
import { OutOfStockproductComponent } from './modules/stock/out-of-stockproduct/out-of-stockproduct.component';
import { AllProductComponent } from './modules/stock/all-product/all-product.component';
import { NavbarComponent } from './modules/admin-dashboard/navbar/navbar.component';
import { StockAddComponent } from './modules/stock/stockadd/stock_add.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
    data: { title: 'Dashboard' },
  },

  {
    path: 'stock',
    loadChildren: () =>
      import('./modules/stock/stock.module').then((m) => m.StockModule),
    data: { title: 'stock' },
  },
  {
    path:'add-stock',
    component:StockAddComponent
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('./modules/billing/billing.module').then((m) => m.BillingModule),
    data: { title: 'billing' },
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./modules/customer/customer.module').then((m) => m.CustomerModule),
    data: { title: 'customer' },
  },
  {
    path: 'discount',
    loadChildren: () =>
      import('./modules/discount/discount.module').then((m) => m.DiscountModule),
    data: { title: 'discount' },
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then((m) => m.SettingsModule),
    data: { title: 'settings' },
  },
  {
    path: 'currunt-stock-product',component:CurruntStockProductComponent
  },
  {
    path: 'out-of-stockproduct',component:OutOfStockproductComponent
  },
  {
    path: 'all-product',component:AllProductComponent
  },
  {
    path: 'navbar',component:NavbarComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
