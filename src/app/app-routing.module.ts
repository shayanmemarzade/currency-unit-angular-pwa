import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'currency-convertor',
    pathMatch: 'full'
  },
  { path: 'currency-convertor', loadChildren: () => import('./currency-convertor/currency-convertor.module').then(m => m.CurrencyConvertorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
