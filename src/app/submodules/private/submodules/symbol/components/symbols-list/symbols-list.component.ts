import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TradingSymbolsListDataSource } from './trading-symbols-list-data-source';
import { Store } from '@ngrx/store';
import { TradingSymbol } from '@app/shared/models/tradingSymbol';

import { merge, Subscription } from 'rxjs';
import { filter, map, subscribeOn, tap } from 'rxjs/operators';
import { symbolsGetPaged } from '@app/submodules/symbol/actions/symbol-get-paged.actions';
import { SymbolState } from '@app/submodules/symbol/reducers/symbol.reducer';
import { AppState } from '@app/root/reducers';

@Component({
	selector: 'app-symbols-list',
	templateUrl: './symbols-list.component.html',
	styleUrls: ['./symbols-list.component.scss'],
})
export class SymbolsListComponent implements AfterViewInit, OnInit {
	@ViewChild(MatPaginator)
	paginator!: MatPaginator;
	@ViewChild(MatSort)
	sort: MatSort = new MatSort();
	@ViewChild(MatTable)
	table!: MatTable<TradingSymbol>;
	dataSource!: TradingSymbolsListDataSource;

	constructor(private store: Store<AppState>) {}

	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
	displayedColumns = [
		'isin',
		'identifier',
		'name',
		'minimum_order_quantity',
		'market_name',
		'market_hours_gmt',
	];

	ngOnInit(): void {
		this.dataSource = new TradingSymbolsListDataSource(this.store);

		this.dataSource.loadSymbols(1, 20, 'identifier', true);
	}

	ngOnDestroy(): void {}

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.paginator.page.pipe(tap(() => this.loadSymbolsPage())).subscribe();

		merge(this.sort.sortChange, this.paginator.page)
			.pipe(tap(() => this.loadSymbolsPage()))
			.subscribe();
	}

	loadSymbolsPage() {
		this.dataSource.loadSymbols(
			this.paginator.pageIndex + 1,
			this.paginator.pageSize,
			this.sort.active ? this.sort.active : 'identifier',
			!!this.sort.direction ? this.sort.direction === 'asc' : true
		);
	}
}
