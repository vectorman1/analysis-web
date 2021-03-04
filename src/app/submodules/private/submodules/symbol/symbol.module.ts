import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymbolRoutingModule } from './symbol-routing.module';
import { SymbolsListComponent } from './components/symbols-list/symbols-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SymbolEffects } from './effects/symbol.effects';
import { SymbolsService } from '@app/submodules/symbol/services/symbols.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SymbolDetailsComponent } from '@app/submodules/symbol/components/symbol-details/symbol-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
	declarations: [SymbolsListComponent, SymbolDetailsComponent],
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
	],
	providers: [SymbolsService],
})
export class SymbolModule {}
