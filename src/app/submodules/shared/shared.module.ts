import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonLoadingDirective } from './directives/mat-button-loading.directive';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
	declarations: [MatButtonLoadingDirective],
	imports: [
		CommonModule,
		NgScrollbarModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatSortModule,
		MatButtonModule,
		MatPaginatorModule,
	],
	exports: [MatButtonLoadingDirective],
})
export class SharedModule {}
