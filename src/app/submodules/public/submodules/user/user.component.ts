import { Component, OnInit } from '@angular/core';
import { userLoginSuccess } from '@app/public/submodules/user/actions/user-login.actions';
import { UserService } from '@app/public/submodules/user/services/user.service';
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
	constructor() {}

	ngOnInit(): void {}
}
