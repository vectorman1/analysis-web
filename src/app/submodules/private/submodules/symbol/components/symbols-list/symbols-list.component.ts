import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TradingSymbolsListDataSource } from './trading-symbols-list-data-source';
import { Store } from '@ngrx/store';
import { TradingSymbol } from '@app/submodules/symbol/models/trading-symbol';

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
import { PagedTableConfig } from '@app/shared/models/paged-table-config';
import { selectSymbolList } from '@app/submodules/symbol/selectors/symbol.selectors';
import { PagedTableDatasource } from '@app/shared/components/paged-table/paged-table.datasource';
import { PagedTableComponent } from '@app/shared/components/paged-table/paged-table.component';

@Component({
	selector: 'app-symbols-list',
	templateUrl: './symbols-list.component.html',
	styleUrls: ['./symbols-list.component.scss'],
	host: {
		class: 'flex',
	},
})
export class SymbolsListComponent implements AfterViewInit, OnInit {
	@ViewChild(PagedTableComponent) table!: PagedTableComponent;

	dataSource!: PagedTableDatasource;
	req!: PagedRequest;
	searchString!: string;
	tableConfig: PagedTableConfig;

	constructor() {
		this.tableConfig = {
			initialDirection: 'desc',
			paginator: [],
			initialSort: 'createdAt',
			storeSelector: selectSymbolList,
			loadAction: symbolsGetPaged,
			columns: [
				{
					name: 'isin',
					displayName: 'ISIN',
					width: '10%',
					isLink: false,
					routerLink: [],
				},
				{
					name: 'identifier',
					displayName: 'Identifier',
					width: '5%',
					isLink: false,
					routerLink: ['/private/symbol', 'details'],
				},
				{
					name: 'name',
					displayName: 'Name',
					width: '25%',
					isLink: false,
					routerLink: [],
				},
				{
					name: 'currencyCode',
					displayName: 'Currency Code',
					width: '5%',
					isLink: false,
					routerLink: [],
				},
				{
					name: 'minimumOrderQuantity',
					displayName: 'Minimum Order Quantity',
					width: '10%',
					isLink: false,
					routerLink: [],
				},
				{
					name: 'marketName',
					displayName: 'Market Name',
					width: '15%',
					isLink: false,
					routerLink: [],
				},
				{
					name: 'marketHoursGmt',
					displayName: 'Market Hours (GMT)',
					width: '10%',
					isLink: false,
					routerLink: [],
				},
				{
					name: 'createdAt',
					displayName: 'Created At',
					width: '30%',
					isLink: false,
					routerLink: [],
				},
			],
		};
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {}

	ngAfterViewInit(): void {
		this.refreshTable();
	}

	refreshTable() {
		this.table.loadItems();
	}
}
