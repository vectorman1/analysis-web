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
	host: {
		class: 'flex',
	},
})
export class AppComponent {
	title = 'analysis-web';

	constructor() {}

	ngOnInit(): void {}
}
