import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConvertorComponent } from './currency-convertor.component';

const routes: Routes = [{ path: '', component: CurrencyConvertorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyConvertorRoutingModule { }
