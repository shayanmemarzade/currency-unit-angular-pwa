import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'currency-convertor',
    pathMatch: 'full'
  },
  { path: 'currency-convertor', loadChildren: () => import('./currency-convertor/currency-convertor.module').then(m => m.CurrencyConvertorModule) },
  { path: 'length-convertor', loadChildren: () => import('./length-convertor/length-convertor.module').then(m => m.LengthConvertorModule) },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
