import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROUTES } from '@app/root/constants/route.constants';
import { LoginResponse } from '@app/public/submodules/user/models/login-response';
import { LoginRequest } from '@app/public/submodules/user/models/login-request';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) {}

	login(request: LoginRequest): Observable<LoginResponse> {
		return this.http.post<LoginResponse>(API_ROUTES.USER.LOGIN, request);
	}
}
