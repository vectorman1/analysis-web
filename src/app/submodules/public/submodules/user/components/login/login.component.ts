import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';
import { userLogin } from '@app/public/submodules/user/actions/user-login.actions';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { selectUserIdentity } from '@app/public/submodules/user/selectors/user.selectors';
import {
	mapIsLoading,
	mapIsNotLoading,
	mapIsSuccess,
} from '@app/root/observable.helpers';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { toastSuccess } from '@app/root/actions/toast.actions';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';

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
		private router: Router,
		private route: ActivatedRoute
	) {
		this.returnUrl = PRIVATE_ROUTES.BASE;
		this.loginInvalid = false;
		this.formSubmitAttempt = false;

		this.userLoading$ = this.store
			.select(selectUserIdentity)
			.pipe(mapIsLoading);

		this.loginSuccess$ = this.store
			.select(selectUserIdentity)
			.pipe(mapIsSuccess);

		this.loginSuccess$.subscribe((ok) => {
			if (ok) {
				let redirectUrl = this.route.snapshot.queryParamMap.get(
					`redirect`
				);
				if (redirectUrl) {
					this.router.navigate([redirectUrl]);
				} else {
					this.router.navigate([PRIVATE_ROUTES.BASE]);
				}

				this.store.dispatch(
					toastSuccess({
						message: 'You have successfully logged in.',
					})
				);
			}
		});

		this.form = this.fb.group({
			username: ['', Validators.compose([Validators.required])],
			password: ['', Validators.compose([Validators.required])],
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		this.form.markAllAsTouched();
		if (this.form.valid) {
			this.store.dispatch(
				userLogin({
					username: this.form.get('username')?.value,
					password: this.form.get('password')?.value,
				})
			);
		} else {
			console.log(this.form.get('username')?.errors);
			console.log(this.form.get('password')?.errors);
		}
	}

	isLoading(): Observable<boolean> {
		return this.userLoading$;
	}
}
