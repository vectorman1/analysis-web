import { AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { TradingSymbolsListDataSource } from '@app/submodules/symbol/components/symbols-list/trading-symbols-list-data-source';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import { selectUserIdentity } from '@app/public/submodules/user/selectors/user.selectors';
import { mapIsSuccess } from '@app/root/observable.helpers';
import { selectNewestSymbols } from '@app/submodules/dashboard/selectors/dashboard.selectors';

@Component({
	selector: 'app-dashboard-root',
	templateUrl: './dashboard-root.component.html',
	styleUrls: ['./dashboard-root.component.scss'],
})
export class DashboardRootComponent implements OnInit {
	dataSource!: TradingSymbolsListDataSource;
	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
	displayedColumns = ['identifier', 'name', 'market_name', 'created_at'];

	newestSymbolsReq = {
		filter: {
			pageNumber: 1,
			pageSize: 10,
			order: 'created_at',
			ascending: false,
			text: '',
		},
	};

	/** Based on the screen size, switch from standard to one column per row */
	cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return [
					{ title: 'Card 1', cols: 1, rows: 1 },
					{ title: 'Card 2', cols: 1, rows: 1 },
					{ title: 'Card 3', cols: 1, rows: 1 },
					{ title: 'Card 4', cols: 1, rows: 1 },
				];
			}

			return [
				{ title: 'Card 1', cols: 2, rows: 1 },
				{ title: 'Card 2', cols: 1, rows: 1 },
				{ title: 'Card 3', cols: 1, rows: 2 },
				{ title: 'Card 4', cols: 1, rows: 1 },
			];
		})
	);

	constructor(
		private breakpointObserver: BreakpointObserver,
		private store: Store<AppState>
	) {
		this.store
			.select(selectNewestSymbols)
			.pipe(
				mapIsSuccess,
				filter((value) => !value)
			)
			.subscribe(() =>
				this.dataSource.loadSymbols(this.newestSymbolsReq)
			);
	}

	ngOnInit() {
		this.dataSource = new TradingSymbolsListDataSource(this.store);
	}
}
