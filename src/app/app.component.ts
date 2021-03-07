import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { UserService } from '@app/public/submodules/user/services/user.service';
import { JwtService } from '@app/public/submodules/user/services/jwt.service';
import { userLoginSuccess } from '@app/public/submodules/user/actions/user-login.actions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'analysis-web';

	constructor(
		private userService: UserService,
		private jwtService: JwtService,
		private store: Store<AppState>
	) {}

	ngOnInit(): void {
		let token = this.userService.getToken();
		if (token) {
			let user = this.jwtService.getUser(token);
			if (user) {
				this.store.dispatch(userLoginSuccess(user));
			}
		}
	}
}
