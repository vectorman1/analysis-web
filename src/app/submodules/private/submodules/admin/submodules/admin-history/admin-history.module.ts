import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHistoryRoutingModule } from './admin-history-routing.module';
import { AdminHistoryBaseComponent } from './components/admin-history-base/admin-history-base.component';


@NgModule({
  declarations: [AdminHistoryBaseComponent],
  imports: [
    CommonModule,
    AdminHistoryRoutingModule
  ]
})
export class AdminHistoryModule { }
