import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	form: FormGroup;
	public loginInvalid: boolean;
	private formSubmitAttempt: boolean;
	private returnUrl: string;
	hidePassword = true;

	constructor(private store: Store<AppState>, private fb: FormBuilder) {
		this.returnUrl = PRIVATE_ROUTES.BASE;
		this.loginInvalid = false;
		this.formSubmitAttempt = false;

		this.form = this.fb.group({
			username: [
				'',
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(15),
			],
			password: ['', Validators.required, Validators.minLength(8)],
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		this.loginInvalid = false;
		this.formSubmitAttempt = false;
	}
}
