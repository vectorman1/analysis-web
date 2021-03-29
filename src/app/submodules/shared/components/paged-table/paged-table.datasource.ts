import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ServerItem } from '@app/root/models/server-item.model';
import { PagedList } from '@app/root/models/paged-list';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Input } from '@angular/core';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import {
	mapIsLoading,
	mapPageItems,
	mapTotalItems,
	mapValue,
} from '@app/root/observable.helpers';
import { PagedRequest } from '@app/shared/models/request';

export class PagedTableDatasource extends DataSource<any> {
	storeSelector: any;
	loadAction: any;

	subscriptions = Array<Subscription>();

	itemsSubject = new BehaviorSubject<any[]>([]);
	isLoadingSubject = new BehaviorSubject<boolean>(false);
	totalItemsSubject = new BehaviorSubject<number>(0);

	private items$: Observable<ServerItem<PagedList<any>>>;

	data!: any[];
	paginator!: MatPaginator;
	sort!: MatSort;

	constructor(
		private store: Store<AppState>,
		storeSelector: any,
		loadAction: any
	) {
		super();

		this.storeSelector = storeSelector;
		this.loadAction = loadAction;

		this.items$ = this.store.select(this.storeSelector);
		this.subscriptions.push(
			this.items$
				.pipe(mapValue, mapPageItems)
				.subscribe(this.itemsSubject),
			this.items$.pipe(mapIsLoading).subscribe(this.isLoadingSubject),
			this.items$
				.pipe(mapValue, mapTotalItems)
				.subscribe(this.totalItemsSubject)
		);
	}

	getItems(): Observable<any> {
		return this.itemsSubject.asObservable();
	}

	getTotalItems(): Observable<number> {
		return this.totalItemsSubject.asObservable();
	}

	getIsLoading(): Observable<boolean> {
		return this.isLoadingSubject.asObservable();
	}

	connect(
		collectionViewer: CollectionViewer
	): Observable<any[] | ReadonlyArray<any>> {
		return this.getItems();
	}

	disconnect(collectionViewer: CollectionViewer): void {
		this.subscriptions.forEach((s) => s.unsubscribe());
		this.totalItemsSubject.complete();
		this.isLoadingSubject.complete();
		this.itemsSubject.complete();
	}

	loadItems(req: PagedRequest) {
		this.store.dispatch(this.loadAction(req));
	}
}
