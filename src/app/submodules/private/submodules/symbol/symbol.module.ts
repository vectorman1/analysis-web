import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymbolRoutingModule } from './symbol-routing.module';
import { SymbolsListComponent } from './components/symbols-list/symbols-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EffectsModule } from '@ngrx/effects';
import { SymbolEffects } from './effects/symbol.effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SymbolDetailsComponent } from '@app/submodules/symbol/components/symbol-details/symbol-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { SymbolComponent } from '@app/submodules/symbol/symbol.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SymbolService } from '@app/submodules/symbol/services/symbol.service';

@NgModule({
	declarations: [
		SymbolsListComponent,
		SymbolDetailsComponent,
		SymbolComponent,
	],
	imports: [
		CommonModule,
		SymbolRoutingModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		EffectsModule.forFeature([SymbolEffects]),
		MatCardModule,
		MatDividerModule,
		NgxSkeletonLoaderModule,
		MatButtonModule,
		MatIconModule,
		MatTabsModule,
		MatGridListModule,
		NgxEchartsModule.forRoot({
			echarts: () => import('echarts'),
		}),
		FlexLayoutModule,
		MatListModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
	],
	providers: [SymbolService],
})
export class SymbolModule {}
