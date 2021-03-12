import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import { symbolsGetDetails } from '@app/submodules/symbol/actions/symbol-get-details.actions';
import { SymbolDetailsRequest } from '@app/shared/models/request';
import { SymbolDetails } from '@app/submodules/symbol/models/symbol-details';
import { BehaviorSubject, Observable, ReplaySubject, Subscription } from 'rxjs';
import { selectSymbolDetails } from '@app/submodules/symbol/selectors/symbol.selectors';
import { ServerItem } from '@app/root/models/server-item.model';
import { mapIsLoading, mapValue } from '@app/root/observable.helpers';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-symbol-details',
	templateUrl: './symbol-details.component.html',
	styleUrls: ['./symbol-details.component.scss'],
	host: {
		class: 'flex',
	},
})
export class SymbolDetailsComponent implements OnInit {
	upColor = '#00da3c';
	downColor = '#ec0000';

	priceActionChartOptions: any;
	subscriptions = Array<Subscription>();
	symbolDetails$: Observable<ServerItem<SymbolDetails>>;

	symbolDetailsSubject = new ReplaySubject<SymbolDetails>();
	isLoadingSubject = new BehaviorSubject<boolean>(true);

	constructor(private route: ActivatedRoute, private store: Store<AppState>) {
		this.symbolDetails$ = this.store.select(selectSymbolDetails);

		this.subscriptions.push(
			this.symbolDetails$
				.pipe(mapIsLoading)
				.pipe(tap((val) => console.log(val)))
				.subscribe(this.isLoadingSubject),
			this.symbolDetails$
				.pipe(mapValue)
				.subscribe(this.symbolDetailsSubject)
		);
	}
	uuid!: string;

	setChartOptions() {}

	ngOnInit(): void {
		this.uuid = this.route.snapshot.params['uuid'];
		this.store.dispatch(
			symbolsGetDetails(new SymbolDetailsRequest(this.uuid))
		);
	}
}
