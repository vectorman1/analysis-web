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
	],
	providers: [SymbolsService],
})
export class SymbolModule {}
