import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
	HistoryChart,
	HistoryChartRequest,
} from '@app/submodules/private-common/models/history-chart';
import { API_ROUTES } from '@app/root/constants/route.constants';

@Injectable()
export class HistoryService {
	constructor(private http: HttpClient) {}

	getSymbolChart(req: HistoryChartRequest): Observable<HistoryChart> {
		return this.http.post<HistoryChart>(
			API_ROUTES.HISTORIES.CHART(req.uuid),
			req
		);
	}

	update(): Observable<any> {
		return this.http.post<any>(API_ROUTES.HISTORIES.UPDATE, null);
	}
}
