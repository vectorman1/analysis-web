export class PagedRequest {
	constructor(filter: Filter) {
		this.filter = filter;
	}

	filter!: Filter;
}

export class Filter {
	pageSize!: number;
	pageNumber!: number;
	order!: string;
	ascending!: boolean;
	text!: string;
}

export class SymbolDetailsRequest {
	constructor(uuid: string) {
		this.uuid = uuid;
	}

	uuid!: string;
}
