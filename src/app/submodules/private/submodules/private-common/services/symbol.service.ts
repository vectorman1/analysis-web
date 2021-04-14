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
	HistoryChartRequest,
	HistoryChart,
} from '@app/submodules/private-common/models/history-chart';
import { SymbolRequest } from '@app/submodules/symbol/models/symbol-request';
import { SymbolOverview } from '@app/submodules/symbol/models/symbol-overview';

@Injectable()
export class SymbolService {
	constructor(private http: HttpClient) {}

	getPaged(req: PagedRequest): Observable<PagedList<TradingSymbol>> {
		const body = JSON.stringify(req);

		return this.http.post<PagedList<TradingSymbol>>(
			API_ROUTES.SYMBOLS.PAGED,
			body
		);
	}

	getOverview(uuid: string): Observable<SymbolOverview> {
		return this.http.get<SymbolOverview>(API_ROUTES.SYMBOLS.OVERVIEW(uuid));
	}

	getChart(req: HistoryChartRequest): Observable<HistoryChart> {
		return this.http.post<HistoryChart>(
			API_ROUTES.HISTORIES.CHART(req.uuid),
			req
		);
	}

	get(uuid: string): Observable<TradingSymbol> {
		return this.http.get<TradingSymbol>(API_ROUTES.SYMBOLS.ITEM(uuid));
	}

	update(): Observable<any> {
		return this.http.post<any>(API_ROUTES.SYMBOLS.UPDATE_ALL, {});
	}
}
