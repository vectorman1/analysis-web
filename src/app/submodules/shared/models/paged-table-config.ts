import { ColumnConfig } from '@app/shared/models/column-config';
import { Input } from '@angular/core';
import { SortDirection } from '@angular/material/sort';

export interface PagedTableConfig {
	columns: ColumnConfig[];
	paginator: number[];
	initialSort: string;
	initialDirection: SortDirection;
	storeSelector: any;
	loadAction: any;
}
