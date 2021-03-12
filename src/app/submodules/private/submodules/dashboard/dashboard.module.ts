import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DashboardRootComponent } from '@app/private/submodules/dashboard/components/dashboard-root/dashboard-root.component';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from '@app/submodules/dashboard/effects/dashboard.effects';

@NgModule({
	declarations: [DashboardRootComponent, DashboardComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		FlexLayoutModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatSortModule,
		EffectsModule.forFeature([DashboardEffects]),
	],
})
export class DashboardModule {}
