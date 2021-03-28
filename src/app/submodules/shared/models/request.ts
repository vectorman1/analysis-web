export interface PagedRequest {
	filter: Filter;
}

export interface Filter {
	pageSize: number;
	pageNumber: number;
	order: string;
	ascending: boolean;
	text: string;
}
