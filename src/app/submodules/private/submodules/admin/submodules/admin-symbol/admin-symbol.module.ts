import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSymbolRoutingModule } from './admin-symbol-routing.module';
import { AdminSymbolBaseComponent } from './components/admin-symbol-base/admin-symbol-base.component';


@NgModule({
  declarations: [AdminSymbolBaseComponent],
  imports: [
    CommonModule,
    AdminSymbolRoutingModule
  ]
})
export class AdminSymbolModule { }
