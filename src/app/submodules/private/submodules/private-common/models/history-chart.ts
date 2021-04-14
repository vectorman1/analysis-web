export class HistoryChartRequest {
	startDate: string;
	endDate: string;
	uuid: string;

	constructor(startDate: string, endDate: string, uuid: string) {
		this.startDate = startDate;
		this.endDate = endDate;
		this.uuid = uuid;
	}
}

export class ChartDay {
	values!: number[];
}

export class HistoryChart {
	dates!: string[];
	chartDays!: ChartDay[];
}
