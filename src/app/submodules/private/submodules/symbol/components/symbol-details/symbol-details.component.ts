import {
	AfterViewInit,
	Component,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import { symbolsGetDetails } from '@app/submodules/symbol/actions/symbol-get-details.actions';
import {
	SymbolDetails,
	SymbolDetailsRequest,
} from '@app/submodules/symbol/models/symbol-details';
import { BehaviorSubject, Observable, ReplaySubject, Subscription } from 'rxjs';
import {
	selectSymbolChart,
	selectSymbolDetails,
} from '@app/submodules/symbol/selectors/symbol.selectors';
import { ServerItem } from '@app/root/models/server-item.model';
import { mapIsLoading, mapValue } from '@app/root/observable.helpers';
import { filter, tap } from 'rxjs/operators';
import { EChartsOption } from 'echarts';
import { symbolsGetChart } from '@app/submodules/symbol/actions/symbol-get-chart.actions';
import {
	SymbolChart,
	SymbolChartRequest,
} from '@app/submodules/symbol/models/symbol-chart';
import { NgxEchartsDirective } from 'ngx-echarts';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
	selector: 'app-symbol-details',
	templateUrl: './symbol-details.component.html',
	styleUrls: ['./symbol-details.component.scss'],
	host: {
		class: 'flex',
	},
})
export class SymbolDetailsComponent
	implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild(NgxEchartsDirective) chart!: NgxEchartsDirective;

	uuid!: string;

	priceActionChartOptions!: EChartsOption;
	subscriptions = Array<Subscription>();
	symbolDetails$: Observable<ServerItem<SymbolDetails>>;
	symbolChart$: Observable<ServerItem<SymbolChart>>;

	symbolChartSubject = new ReplaySubject<SymbolChart>();
	symbolDetailsSubject = new ReplaySubject<SymbolDetails>();

	isLoadingSubject = new BehaviorSubject<boolean>(true);
	isChartLoadingSubject = new BehaviorSubject<boolean>(true);

	constructor(private route: ActivatedRoute, private store: Store<AppState>) {
		this.symbolDetails$ = this.store.select(selectSymbolDetails);
		this.symbolChart$ = this.store.select(selectSymbolChart);

		this.subscriptions.push(
			this.symbolDetails$
				.pipe(mapIsLoading)
				.subscribe(this.isLoadingSubject),
			this.symbolDetails$
				.pipe(mapValue)
				.subscribe(this.symbolDetailsSubject),
			this.symbolChart$
				.pipe(mapIsLoading)
				.subscribe(this.isChartLoadingSubject)
		);
	}

	loadHistoryData() {
		this.store.dispatch(
			symbolsGetChart(
				new SymbolChartRequest(
					new Date(2010, 1, 1).toISOString(),
					new Date().toISOString(),
					this.uuid
				)
			)
		);
	}

	ngOnInit(): void {
		this.uuid = this.route.snapshot.params['uuid'];
		this.store.dispatch(
			symbolsGetDetails(new SymbolDetailsRequest(this.uuid))
		);
	}

	ngAfterViewInit(): void {
		this.subscriptions.push(
			this.symbolChart$
				.pipe(mapValue)
				.pipe(filter((c) => !!c))
				.subscribe((chart: SymbolChart) => {
					let values = chart.value.map((v) => v.values).reverse();
					let dates = chart.value.map((v) => v.date).reverse();
					this.initChart(dates, values);
				})
		);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((s) => s.unsubscribe());
		this.symbolChartSubject.complete();
		this.symbolDetailsSubject.complete();
		this.isLoadingSubject.complete();
		this.isChartLoadingSubject.complete();
	}

	initChart(dates: string[], values: number[][]) {
		this.priceActionChartOptions = {
			darkMode: true,
			xAxis: {
				data: dates,
			},
			yAxis: {},
			dataZoom: [
				{
					type: 'inside',
					xAxisIndex: [0, 1],
					start: 98,
					end: 100,
				},
				{
					show: true,
					xAxisIndex: [0, 1],
					type: 'slider',
					top: '85%',
					start: 98,
					end: 100,
				},
			],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
				},
				backgroundColor: 'rgba(245, 245, 245, 0.8)',
				borderWidth: 1,
				borderColor: '#ccc',
				padding: 10,
				textStyle: {
					color: '#000',
				},
				// extraCssText: 'width: 170px'
			},
			series: [
				{
					type: 'candlestick',
					// arr(close open low high)
					data: values,
				},
			],
		};
		if (this.chart) {
			this.chart.refreshChart();
		}
	}

	handleTabChange($event: MatTabChangeEvent) {
		if ($event.index == 2) {
			this.loadHistoryData();
		}
	}
}
