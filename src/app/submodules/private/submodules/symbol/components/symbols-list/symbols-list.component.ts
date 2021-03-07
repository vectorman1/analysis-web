import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TradingSymbolsListDataSource } from './trading-symbols-list-data-source';
import { Store } from '@ngrx/store';
import { TradingSymbol } from '@app/shared/models/tradingSymbol';

import { merge, Subscription } from 'rxjs';
import {
	exhaustMap,
	filter,
	map,
	mergeMap,
	subscribeOn,
	switchMap,
	tap,
} from 'rxjs/operators';
import { symbolsGetPaged } from '@app/submodules/symbol/actions/symbol-get-paged.actions';
import { SymbolState } from '@app/submodules/symbol/reducers/symbol.reducer';
import { AppState } from '@app/root/reducers';
import { PagedRequest } from '@app/shared/models/request';
import { isNullOrUndefined } from '@app/root/utils';

@Component({
	selector: 'app-symbols-list',
	templateUrl: './symbols-list.component.html',
	styleUrls: ['./symbols-list.component.scss'],
	host: {
		class: 'flex',
	},
})
export class SymbolsListComponent implements AfterViewInit, OnInit {
	@ViewChild(MatPaginator)
	paginator!: MatPaginator;
	@ViewChild(MatSort)
	sort: MatSort = new MatSort();
	@ViewChild(MatTable)
	table!: MatTable<TradingSymbol>;
	dataSource!: TradingSymbolsListDataSource;
	req!: PagedRequest;
	searchString!: string;

	constructor(private store: Store<AppState>) {}

	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
	displayedColumns = [
		'isin',
		'identifier',
		'name',
		'currency',
		'minimum_order_quantity',
		'market_name',
		'market_hours_gmt',
		'created_at',
	];

	ngOnInit(): void {
		this.dataSource = new TradingSymbolsListDataSource(this.store);

		this.req = {
			filter: {
				pageNumber: 1,
				pageSize: 20,
				ascending: false,
				order: 'created_at',
				text: '',
			},
		};

		this.dataSource.loadSymbols(this.req);
	}

	ngOnDestroy(): void {}

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

		merge(this.sort.sortChange, this.paginator.page)
			.pipe(
				tap(() => {
					this.loadSymbolsPage();
				})
			)
			.subscribe();
	}

	loadSymbolsPage() {
		this.req = {
			filter: {
				pageNumber: this.paginator.pageIndex + 1,
				pageSize: this.paginator.pageSize,
				order: this.sort.active ? this.sort.active : 'uuid',
				ascending: !!this.sort.direction
					? this.sort.direction === 'asc'
					: true,
				text: this.searchString,
			},
		};
		console.log(this.searchString);
		this.dataSource.loadSymbols(this.req);
	}
}
