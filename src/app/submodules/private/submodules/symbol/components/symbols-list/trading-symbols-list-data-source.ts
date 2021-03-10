import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
	TradingSymbol,
	TradingSymbols,
} from '@app/shared/models/tradingSymbol';
import { PagedRequest } from '@app/shared/models/request';
import { ServerItem } from '@app/root/models/server-item.model';
import { symbolsGetPaged } from '@app/submodules/symbol/actions/symbol-get-paged.actions';
import { selectSymbolList } from '@app/submodules/symbol/selectors/symbol.selectors';

import * as fromSymbols from '@app/submodules/symbol/selectors/symbol.selectors';
import { SymbolState } from '@app/submodules/symbol/reducers/symbol.reducer';
import { AppState } from '@app/root/reducers';
import { map, tap } from 'rxjs/operators';
import {
	mapIsLoading,
	mapIsSuccess,
	mapPageItems,
	mapSendValue,
	mapTotalItems,
	mapValue,
} from '@app/root/observable.helpers';
import { PagedList } from '@app/root/models/paged-list';
import { ServerError } from '@app/shared/models/server-error';

/**
 * Data source for the SymbolsList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TradingSymbolsListDataSource extends DataSource<TradingSymbol> {
	subscriptions = Array<Subscription>();
	symbolsSubject = new BehaviorSubject<TradingSymbol[]>([]);
	loadingSubject = new BehaviorSubject<boolean>(false);
	totalItemsSubject = new BehaviorSubject<number>(0);

	private symbols$: Observable<ServerItem<PagedList<TradingSymbol>>>;

	data!: TradingSymbol[];
	paginator!: MatPaginator;
	sort!: MatSort;

	constructor(private store: Store<AppState>) {
		super();

		this.symbols$ = this.store.select(fromSymbols.selectSymbolList);
		this.subscriptions.push(
			this.symbols$.pipe(mapIsLoading).subscribe(this.loadingSubject),
			this.symbols$
				.pipe(mapValue)
				.pipe(mapPageItems)
				.subscribe(this.symbolsSubject),
			this.symbols$
				.pipe(mapValue)
				.pipe(mapTotalItems)
				.subscribe(this.totalItemsSubject)
		);
	}

	/**
	 * Connect this data source to the table. The table will only update when
	 * the returned stream emits new items.
	 * @returns A stream of the items to be rendered.
	 */
	connect(): Observable<TradingSymbol[]> {
		return this.symbolsSubject.asObservable();
	}

	getTotalItems(): Observable<number> {
		return this.totalItemsSubject.asObservable();
	}

	getIsLoading(): Observable<boolean> {
		return this.loadingSubject.asObservable();
	}

	/**
	 *  Called when the table is being destroyed. Use this function, to clean up
	 * any open connections or free any held resources that were set up during connect.
	 */
	disconnect(): void {
		this.symbolsSubject.complete();
		this.loadingSubject.complete();
		this.subscriptions.forEach((s) => s.unsubscribe());
	}

	loadSymbols(req: PagedRequest) {
		this.loadingSubject.next(true);
		this.symbolsSubject.next([]);

		this.store.dispatch(symbolsGetPaged(req));
	}
}
