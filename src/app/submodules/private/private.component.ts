import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { userLogout } from '@app/public/submodules/user/actions/user-logout.actions';

@Component({
	selector: 'app-private',
	templateUrl: './private.component.html',
	styleUrls: ['./private.component.scss'],
	host: {
		class: 'flex',
	},
})
export class PrivateComponent {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(
			map((result) => result.matches),
			shareReplay()
		);

	constructor(
		private breakpointObserver: BreakpointObserver,
		private store: Store<AppState>
	) {}

	logout() {
		this.store.dispatch(userLogout());
	}
}
