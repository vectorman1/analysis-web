import { Component, OnInit } from '@angular/core';
import { userLoginSuccess } from '@app/public/submodules/user/actions/user-login.actions';
import { IdentityService } from '@app/public/submodules/user/services/identity.service';
import { JwtService } from '@app/public/submodules/user/services/jwt.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	host: {
		class: 'flex',
	},
})
export class UserComponent implements OnInit {
	constructor(
		private userService: IdentityService,
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
