import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedRequest } from '@app/shared/models/request';
import {
	TradingSymbol,
	TradingSymbols,
} from '@app/shared/models/tradingSymbol';
import { API_ROUTES } from '@app/root/constants/route.constants';
import { PagedList } from '@app/root/models/paged-list';

@Injectable({
	providedIn: 'root',
})
export class SymbolsService {
	constructor(private http: HttpClient) {}

	getPaged(req: PagedRequest): Observable<PagedList<TradingSymbol>> {
		const body = JSON.stringify(req);

		return this.http.post<PagedList<TradingSymbol>>(
			API_ROUTES.SYMBOL.PAGED,
			body
		);
	}
}
