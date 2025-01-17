import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { symbolsGetPaged } from '@app/submodules/symbol/actions/symbol-get-paged.actions';
import { PagedRequest } from '@app/shared/models/request';
import { PagedTableConfig } from '@app/submodules/private-common/models/paged-table-config';
import { selectSymbolList } from '@app/submodules/symbol/selectors/symbol.selectors';
import { PagedTableComponent } from '@app/private/submodules/private-common/components/paged-table/paged-table.component';
import { DatePipe } from '@angular/common';

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
					pipe: null,
				},
				{
					name: 'identifier',
					displayName: 'Identifier',
					width: '5%',
					isLink: true,
					routerLink: ['/private/symbol', 'details'],
					pipe: null,
				},
				{
					name: 'name',
					displayName: 'Name',
					width: '25%',
					isLink: false,
					routerLink: [],
					pipe: null,
				},
				{
					name: 'currencyCode',
					displayName: 'Currency Code',
					width: '10%',
					isLink: false,
					routerLink: [],
					pipe: null,
				},
				{
					name: 'minimumOrderQuantity',
					displayName: 'Minimum Order Quantity',
					width: '10%',
					isLink: false,
					routerLink: [],
					pipe: null,
				},
				{
					name: 'marketName',
					displayName: 'Market Name',
					width: '15%',
					isLink: false,
					routerLink: [],
					pipe: null,
				},
				{
					name: 'marketHoursGmt',
					displayName: 'Market Hours (GMT)',
					width: '10%',
					isLink: false,
					routerLink: [],
					pipe: null,
				},
				{
					name: 'createdAt',
					displayName: 'Created At',
					width: '25%',
					isLink: false,
					routerLink: [],
					pipe: DatePipe,
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
