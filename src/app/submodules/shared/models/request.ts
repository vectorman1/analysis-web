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
}
