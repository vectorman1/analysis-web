import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import { map } from 'rxjs/operators';
import { selectUserIdentity } from '@app/public/submodules/user/selectors/user.selectors';
import { mapIsSuccess } from '@app/root/observable.helpers';

@Injectable()
export class UserGuard implements CanActivate {
	constructor(private router: Router, private store: Store<AppState>) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		let result = false;
		this.store
			.select(selectUserIdentity)
			.pipe(mapIsSuccess)
			.subscribe((res) => {
				result = res;
			});

		if (!result) {
			this.router.navigate(['/public/user/login'], {
				queryParams: { redirect: state.url },
				replaceUrl: true,
			});
		}

		return result;
	}
}
