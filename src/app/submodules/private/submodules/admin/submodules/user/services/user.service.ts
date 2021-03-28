import { Injectable } from '@angular/core';
import { User } from '@app/submodules/admin/submodules/user/models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import { API_ROUTES } from '@app/root/constants/route.constants';
import { PagedRequest } from '@app/shared/models/request';
import { PagedList } from '@app/root/models/paged-list';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	get(uuid: string): Observable<User> {
		return this.http.get<User>(API_ROUTES.USER.BY_UUID(uuid));
	}

	getPaged(req: PagedRequest): Observable<PagedList<User>> {
		return this.http.post<PagedList<User>>(API_ROUTES.USER.PAGED, req);
	}

	update(user: User): Observable<any> {
		return this.http.put<any>(API_ROUTES.USER.BY_UUID(user.uuid), user);
	}

	delete(uuid: string): Observable<any> {
		return this.http.delete<any>(API_ROUTES.USER.BY_UUID(uuid));
	}

	create(user: User): Observable<any> {
		return this.http.post<any>(API_ROUTES.USER.BASE, user);
	}

	constructor(private http: HttpClient) {}
}
