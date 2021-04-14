import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagedTableComponent } from '@app/submodules/private-common/components/paged-table/paged-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SymbolService } from '@app/submodules/private-common/services/symbol.service';
import { HistoryService } from '@app/submodules/private-common/services/history.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
	declarations: [PagedTableComponent],
	imports: [
		CommonModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatTableModule,
		NgScrollbarModule,
		MatButtonModule,
		RouterModule,
		FlexModule,
	],
	providers: [SymbolService, HistoryService],
	exports: [PagedTableComponent],
})
export class PrivateCommonModule {}
