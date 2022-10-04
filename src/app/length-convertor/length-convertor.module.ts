import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LengthConvertorRoutingModule } from './length-convertor-routing.module';
import { LengthConvertorComponent } from './length-convertor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LengthConvertorComponent
  ],
  imports: [
    CommonModule,
    LengthConvertorRoutingModule,
    SharedModule
  ]
})
export class LengthConvertorModule { }
