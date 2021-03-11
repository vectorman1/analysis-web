import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userLogout } from '@app/public/submodules/user/actions/user-logout.actions';
import { selectUserIdentity } from '@app/public/submodules/user/selectors/user.selectors';
import { mapIsSuccess } from '@app/root/observable.helpers';
import { Router } from '@angular/router';
import { userLoginSuccess } from '@app/public/submodules/user/actions/user-login.actions';
import { UserService } from '@app/public/submodules/user/services/user.service';
import { JwtService } from '@app/public/submodules/user/services/jwt.service';

@Component({
	selector: 'app-public',
	templateUrl: './public.component.html',
	styleUrls: ['./public.component.scss'],
	host: {
		class: 'flex',
	},
})
export class PublicComponent implements AfterViewInit {
	isLoggedIn$!: Observable<boolean>;

	constructor(private store: Store<AppState>) {}

	ngAfterViewInit(): void {
		this.isLoggedIn$ = this.store
			.select(selectUserIdentity)
			.pipe(mapIsSuccess);
	}

	logout() {
		this.store.dispatch(userLogout());
	}
}
