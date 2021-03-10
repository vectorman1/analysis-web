import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { API_ROUTES } from '@app/root/constants/route.constants';
import { LoginResponse } from '@app/public/submodules/user/models/login-response';
import { LoginRequest } from '@app/public/submodules/user/models/login-request';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	saveToken(token: string) {
		localStorage.setItem(APP_CONSTANTS.TOKEN_COOKIE, token);
	}

	getToken(): string | null {
		return localStorage.getItem(APP_CONSTANTS.TOKEN_COOKIE);
	}

	logout() {
		localStorage.removeItem(APP_CONSTANTS.TOKEN_COOKIE);
	}

	login(request: LoginRequest): Observable<LoginResponse> {
		return this.http.post<LoginResponse>(API_ROUTES.USER.LOGIN, request);
	}
}
