import {
	AfterViewInit,
	Component,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PagedRequest } from '@app/shared/models/request';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { PagedTableDatasource } from '@app/shared/components/paged-table/paged-table.datasource';
import { merge, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PagedTableConfig } from '@app/shared/models/paged-table-config';
import { mapIsLoading, mapValue } from '@app/root/observable.helpers';

@Component({
	selector: 'app-paged-table',
	templateUrl: './paged-table.component.html',
	styleUrls: ['./paged-table.component.scss'],
})
export class PagedTableComponent implements OnInit, AfterViewInit {
	dataSource!: PagedTableDatasource;
	@Input() config!: PagedTableConfig;

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort: MatSort = new MatSort();
	@ViewChild(MatTable) table!: MatTable<any>;

	subscriptions = Array<Subscription>();

	req!: PagedRequest;
	searchString!: string;
	displayedColumns!: string[];

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.displayedColumns = this.config.columns.map((c) => c.name);
	}

	ngAfterViewInit(): void {
		this.dataSource = new PagedTableDatasource(
			this.store,
			this.config.storeSelector,
			this.config.loadAction
		);

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

		merge(this.sort.sortChange, this.paginator.page)
			.pipe(
				tap(() => {
					this.loadItems();
				})
			)
			.subscribe();

		this.loadItems();
	}

	loadItems() {
		this.req = {
			filter: {
				pageNumber: this.paginator.pageIndex + 1,
				pageSize: this.paginator.pageSize,
				order: this.sort.active,
				ascending: this.sort.direction === 'asc',
				text: this.searchString,
			},
		};

		this.dataSource.loadItems(this.req);
	}
}
