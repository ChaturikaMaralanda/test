import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
