import { AfterViewInit, Component } from '@angular/core';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userLogout } from '@app/public/submodules/user/actions/user-logout.actions';
import { selectUserIdentity } from '@app/public/submodules/user/selectors/user.selectors';
import { mapIsSuccess } from '@app/root/observable.helpers';

@Component({
	selector: 'app-public',
	templateUrl: './public.component.html',
	styleUrls: ['./public.component.scss'],
	host: {
		class: 'flex',
	},
})
export class PublicComponent implements AfterViewInit {
	isLoggedIn$: Observable<boolean>;

	constructor(private store: Store<AppState>) {
		this.isLoggedIn$ = this.store
			.select(selectUserIdentity)
			.pipe(mapIsSuccess);
	}

	ngAfterViewInit(): void {}

	logout() {
		this.store.dispatch(userLogout());
	}
}
