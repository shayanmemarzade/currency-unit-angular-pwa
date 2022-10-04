import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConvertorRoutingModule } from './currency-convertor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CurrencyConvertorComponent } from './currency-convertor.component';


@NgModule({
  declarations: [
    CurrencyConvertorComponent
  ],
  imports: [
    CommonModule,
    CurrencyConvertorRoutingModule,
    SharedModule
  ]
})
export class CurrencyConvertorModule { }
