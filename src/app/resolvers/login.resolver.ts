import { Injectable } from '@angular/core';
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/root/reducers';
import { IdentityService } from '@app/identity/services/identity.service';

@Injectable({
	providedIn: 'root',
})
export class LoginResolver implements Resolve<boolean> {
	constructor(
		private store: Store<fromRoot.AppState>,
		private identityService: IdentityService
	) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> {
		return of(true);
	}
}
