import {
	AfterViewInit,
	Component,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core';
import { EChartsOption } from 'echarts';
import {
	mapIsLoading,
	mapIsSuccess,
	mapValue,
} from '@app/root/observable.helpers';
import { filter } from 'rxjs/operators';
import {
	HistoryChart,
	HistoryChartRequest,
} from '@app/submodules/private-common/models/history-chart';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ServerItem } from '@app/root/models/server-item.model';
import { NgxEchartsDirective } from 'ngx-echarts';
import { selectSymbolChart } from '@app/submodules/symbol/selectors/symbol.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import { ChartTimeRange } from '@app/submodules/private-common/models/chart-time-range';
import {
	symbolsGetChart,
	symbolsGetChartReset,
} from '@app/submodules/symbol/actions/symbol-get-chart.actions';

@Component({
	selector: 'app-symbol-chart',
	templateUrl: './symbol-chart.component.html',
	styleUrls: ['./symbol-chart.component.scss'],
})
export class SymbolChartComponent implements OnInit, AfterViewInit {
	@Input() symbolUuid!: string;
	@ViewChild(NgxEchartsDirective) chart!: NgxEchartsDirective;

	subscriptions = Array<Subscription>();
	symbolChart$: Observable<ServerItem<HistoryChart>>;
	isLoading$ = new BehaviorSubject<boolean>(true);
	isSuccess$ = new BehaviorSubject<boolean>(false);

	priceActionChartOptions: EChartsOption;
	chartTimeRanges: ChartTimeRange[];
	chartTimeRange!: ChartTimeRange;

	constructor(private store: Store<AppState>) {
		this.priceActionChartOptions = APP_CONSTANTS.DEFAULT_CHART_SETTINGS;

		this.symbolChart$ = this.store.select(selectSymbolChart);

		this.subscriptions.push(
			this.symbolChart$
				.pipe(mapValue)
				.pipe(filter((c) => !!c))
				.subscribe((chart: HistoryChart) => {
					let values = chart.chartDays.map((v) => v.values);
					this.initChart(chart.dates, values);
				}),
			this.symbolChart$.pipe(mapIsLoading).subscribe(this.isLoading$),
			this.symbolChart$.pipe(mapIsSuccess).subscribe(this.isSuccess$)
		);

		let timeNow = new Date();

		this.chartTimeRanges = [
			{
				text: '5D',
				time: new Date(
					timeNow.getTime() - APP_CONSTANTS.TIME_RANGES.FIVE_DAY_MS
				),
				checked: true,
			},
			{
				text: '1MO',
				time: new Date(
					timeNow.getTime() - APP_CONSTANTS.TIME_RANGES.ONE_MONTH_MS
				),
				checked: false,
			},
			{
				text: '6MO',
				time: new Date(
					timeNow.getTime() - APP_CONSTANTS.TIME_RANGES.SIX_MONTHS_MS
				),
				checked: false,
			},
			{
				text: '1YR',
				time: new Date(
					timeNow.getTime() - APP_CONSTANTS.TIME_RANGES.ONE_YEAR_MS
				),
				checked: false,
			},
			{
				text: '5YR',
				time: new Date(
					timeNow.getTime() - APP_CONSTANTS.TIME_RANGES.FIVE_YEARS_MS
				),
				checked: false,
			},
			{
				text: 'MAX',
				time: new Date(2000, 0),
				checked: false,
			},
		];

		this.chartTimeRange = this.chartTimeRanges[0];
	}

	ngOnInit(): void {}

	initChart(dates: string[], values: number[][]) {
		this.priceActionChartOptions = {
			...this.priceActionChartOptions,
			xAxis: {
				data: dates,
			},
			series: [
				{
					type: 'candlestick',
					data: values,
				},
			],
		};
		if (this.chart) {
			this.chart.refreshChart();
		}
	}

	ngAfterViewInit(): void {
		this.store.dispatch(
			symbolsGetChart(
				new HistoryChartRequest(
					this.chartTimeRange.time.toISOString(),
					new Date().toISOString(),
					this.symbolUuid
				)
			)
		);
	}

	onTimeRangeChange() {
		this.store.dispatch(
			symbolsGetChart(
				new HistoryChartRequest(
					this.chartTimeRange.time.toISOString(),
					new Date().toISOString(),
					this.symbolUuid
				)
			)
		);
	}
}
