import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DashboardRootComponent } from '@app/private/submodules/dashboard/components/dashboard-root/dashboard-root.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	declarations: [DashboardRootComponent, DashboardComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
	],
})
export class DashboardModule {}
