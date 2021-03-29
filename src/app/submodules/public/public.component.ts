import { AfterViewInit, Component } from '@angular/core';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
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
	isLoggedInSubject = new BehaviorSubject<boolean>(false);

	constructor(private store: Store<AppState>) {
		this.store
			.select(selectUserIdentity)
			.pipe(mapIsSuccess)
			.subscribe(this.isLoggedInSubject);
	}

	ngAfterViewInit(): void {}

	logout() {
		this.store.dispatch(userLogout());
	}
}
