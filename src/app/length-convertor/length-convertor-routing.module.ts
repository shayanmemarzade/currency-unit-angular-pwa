import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LengthConvertorComponent } from './length-convertor.component';

const routes: Routes = [{ path: '', component: LengthConvertorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LengthConvertorRoutingModule { }
