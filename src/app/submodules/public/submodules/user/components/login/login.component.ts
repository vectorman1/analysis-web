import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';
import { userLogin } from '@app/public/submodules/user/actions/user-login.actions';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { selectUserLogin } from '@app/public/submodules/user/selectors/user.selectors';
import {
	mapIsLoading,
	mapIsNotLoading,
	mapIsSuccess,
} from '@app/root/observable.helpers';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	host: {
		class: 'flex',
	},
})
export class LoginComponent implements OnInit {
	private userLoading$ = new Observable<boolean>();
	private loginSuccess$ = new Observable<boolean>();

	form: FormGroup;
	public loginInvalid: boolean;
	private formSubmitAttempt: boolean;
	private returnUrl: string;
	hidePassword = true;

	constructor(
		private store: Store<AppState>,
		private fb: FormBuilder,
		private router: Router
	) {
		this.returnUrl = PRIVATE_ROUTES.BASE;
		this.loginInvalid = false;
		this.formSubmitAttempt = false;

		this.userLoading$ = this.store
			.select(selectUserLogin)
			.pipe(mapIsLoading);

		this.loginSuccess$ = this.store
			.select(selectUserLogin)
			.pipe(mapIsSuccess);

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
		this.store.dispatch(
			userLogin({
				username: this.form.get('username')?.value,
				password: this.form.get('password')?.value,
			})
		);

		this.loginSuccess$.subscribe(() => this.router.navigate(['/private']));
	}

	isLoading(): Observable<boolean> {
		return this.userLoading$;
	}
}
