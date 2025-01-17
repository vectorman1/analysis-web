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
			splitArea: {
				show: true,
			},
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
				bottom: '2%',
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
		visualMap: {
			show: true,
			seriesIndex: 5,
			dimension: 2,
			pieces: [
				{
					value: 1,
					color: '#00da3c',
				},
				{
					value: -1,
					color: '#ec0000',
				},
			],
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
	ROLES: {
		DEFAULT: 0,
		ADMIN: 1,
	},
	SKELETON_THEMES: {
		SHORT: {
			'background-color': '#303030',
			height: '16px',
			'margin-bottom': '-3px',
			'min-width': '40px',
		},
		MEDIUM: {
			'background-color': '#303030',
			height: '16px',
			'margin-bottom': '-3px',
			'min-width': '80px',
		},
		LONG: {
			'background-color': '#303030',
			height: '16px',
			'margin-bottom': '-3px',
			'min-width': '120px',
		},
	},
	TOAST_SERVER_ERRORS: [400, 404],
};
