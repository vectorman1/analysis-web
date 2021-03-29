import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedRequest } from '@app/shared/models/request';
import {
	TradingSymbol,
	TradingSymbols,
} from '@app/submodules/symbol/models/trading-symbol';
import { API_ROUTES } from '@app/root/constants/route.constants';
import { PagedList } from '@app/root/models/paged-list';
import {
	SymbolChartRequest,
	SymbolChart,
} from '@app/submodules/symbol/models/symbol-chart';
import { SymbolRequest } from '@app/submodules/symbol/models/symbol-request';
import { SymbolOverview } from '@app/submodules/symbol/models/symbol-overview';

@Injectable({
	providedIn: 'root',
})
export class SymbolService {
	constructor(private http: HttpClient) {}

	getPaged(req: PagedRequest): Observable<PagedList<TradingSymbol>> {
		const body = JSON.stringify(req);

		return this.http.post<PagedList<TradingSymbol>>(
			API_ROUTES.SYMBOL.PAGED,
			body
		);
	}

	getOverview(uuid: string): Observable<SymbolOverview> {
		return this.http.get<SymbolOverview>(API_ROUTES.SYMBOL.OVERVIEW(uuid));
	}

	getChart(req: SymbolChartRequest): Observable<SymbolChart> {
		return this.http.post<SymbolChart>(
			API_ROUTES.HISTORIES.CHART(req.uuid),
			req
		);
	}

	get(uuid: string): Observable<TradingSymbol> {
		return this.http.get<TradingSymbol>(API_ROUTES.SYMBOL.ITEM(uuid));
	}
}
