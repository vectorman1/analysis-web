import { EChartsOption } from 'echarts';

export const TIME_CONSTANTS = {
	DAY_MS: 24 * 60 * 60000,
};

export const APP_CONSTANTS = {
	REQUEST_DEBOUNCE_MS: 500,
	TOAST_DURATION_MS: 3000,
	TOKEN: 'token',
	DEFAULT_CHART_SETTINGS: {
		darkMode: true,
		xAxis: {},
		yAxis: {
			scale: true,
		},
		dataZoom: [
			{
				type: 'inside',
				xAxisIndex: [0, 1],
				start: 20,
				end: 100,
			},
			{
				show: true,
				xAxisIndex: [0, 1],
				type: 'slider',
				top: '85%',
				start: 20,
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
				color: '#000000',
			},
			// extraCssText: 'width: 170px'
		},
	} as EChartsOption,
	MS_PER_MINUTE: 60000,
	TIME_RANGES: {
		FIVE_DAY_MS: 6 * TIME_CONSTANTS.DAY_MS,
		ONE_MONTH_MS: 31 * TIME_CONSTANTS.DAY_MS,
		SIX_MONTHS_MS: 61 * TIME_CONSTANTS.DAY_MS,
		ONE_YEAR_MS: 366 * TIME_CONSTANTS.DAY_MS,
		FIVE_YEARS_MS: 5 * 366 * TIME_CONSTANTS.DAY_MS,
	},
};
