import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import { Router } from '@angular/router';
import { userLogin } from '@app/public/submodules/user/actions/user-login.actions';
import { userRegister } from '@app/public/submodules/user/actions/user-register.actions';
import { Observable } from 'rxjs';
import { selectUserIdentity } from '@app/public/submodules/user/selectors/user.selectors';
import { mapIsLoading, mapIsSuccess } from '@app/root/observable.helpers';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	form: FormGroup;
	hidePassword = true;

	private registerLoading$ = new Observable<boolean>();
	private registerSuccess$ = new Observable<boolean>();

	constructor(
		private store: Store<AppState>,
		private fb: FormBuilder,
		private router: Router
	) {
		this.registerLoading$ = this.store
			.select(selectUserIdentity)
			.pipe(mapIsLoading);

		this.registerSuccess$ = this.store
			.select(selectUserIdentity)
			.pipe(mapIsSuccess);

		this.form = this.fb.group({
			username: ['', Validators.compose([Validators.required])],
			password: ['', Validators.compose([Validators.required])],
		});

		this.registerSuccess$.subscribe((ok) => {
			if (ok) {
				this.router.navigate(['/private']);
			}
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		this.form.markAllAsTouched();
		if (this.form.valid) {
			this.store.dispatch(
				userRegister({
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
		return this.registerLoading$;
	}
}
