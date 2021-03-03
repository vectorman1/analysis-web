import { Injectable } from '@angular/core';
import { AuthResponse } from '@app/identity/models/response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '@app/identity/models/request';
import { environment } from '@env/environment';
import { API_ROUTES } from '@app/root/constants/route.constants';

@Injectable({
	providedIn: 'root',
})
export class IdentityService {
	constructor(private http: HttpClient) {}

	login(request: LoginRequest): Observable<AuthResponse> {
		return this.http.post<AuthResponse>(API_ROUTES.USER.LOGIN, request);
	}

	register(request: LoginRequest): Observable<AuthResponse> {
		return this.http.post<AuthResponse>(API_ROUTES.USER.REGISTER, request);
	}
}
