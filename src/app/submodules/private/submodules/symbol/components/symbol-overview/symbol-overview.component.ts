import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { SymbolOverview } from '@app/submodules/symbol/models/symbol-overview';
import { ServerItem } from '@app/root/models/server-item.model';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { selectSymbolOverview } from '@app/submodules/symbol/selectors/symbol.selectors';
import { mapIsLoading, mapValue } from '@app/root/observable.helpers';
import { symbolsGetOverview } from '@app/submodules/symbol/actions/symbol-get-overview.actions';
import { SymbolOverviewRequest } from '@app/submodules/symbol/models/symbol-overview-request';

@Component({
	selector: 'app-symbol-overview',
	templateUrl: './symbol-overview.component.html',
	styleUrls: ['./symbol-overview.component.scss'],
})
export class SymbolOverviewComponent implements OnInit {
	@Input() symbolUuid!: string;

	symbolOverviewSubject = new Subject<SymbolOverview>();
	isLoadingSubject = new BehaviorSubject<boolean>(true);

	subscriptions = new Array<Subscription>();
	symbolOverview$: Observable<ServerItem<SymbolOverview>>;

	constructor(private store: Store<AppState>) {
		this.symbolOverview$ = this.store.select(selectSymbolOverview);

		this.subscriptions.push(
			this.symbolOverview$
				.pipe(mapValue)
				.subscribe(this.symbolOverviewSubject),
			this.symbolOverview$
				.pipe(mapIsLoading)
				.subscribe(this.isLoadingSubject)
		);
	}

	ngOnInit(): void {
		this.store.dispatch(
			symbolsGetOverview(new SymbolOverviewRequest(this.symbolUuid))
		);
	}
}
