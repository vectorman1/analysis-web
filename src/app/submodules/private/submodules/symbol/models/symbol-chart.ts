export class SymbolChartRequest {
	startDate: string;
	endDate: string;
	uuid: string;

	constructor(startDate: string, endDate: string, uuid: string) {
		this.startDate = startDate;
		this.endDate = endDate;
		this.uuid = uuid;
	}
}

export class ChartValues {
	date!: string;
	values!: number[];
}

export class SymbolChart {
	value!: ChartValues[];
}
