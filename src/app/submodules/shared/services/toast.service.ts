import { Injectable } from '@angular/core';
import { ServerError } from '@app/shared/models/server-error';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import { MatSnackBarConfig } from '@angular/material/snack-bar/snack-bar-config';
import { environment } from '@env/environment';

@Injectable()
export class ToastService {
	constructor(private snackbar: MatSnackBar) {}
	openErrorToast(err: any) {
		let config = {
			horizontalPosition: 'right',
			verticalPosition: 'top',
			politeness: 'assertive',
			duration: APP_CONSTANTS.TOAST_DURATION_MS,
			panelClass: ['error-toast'],
		} as MatSnackBarConfig;

		switch (err.status) {
			case 400:
				this.snackbar.open(err.error.message, '', config);
				return;
			default:
				if (!environment.production) {
					this.snackbar.open(err.message, '', config);
				}
		}
	}
	openSuccessToast(t: any) {
		this.snackbar.open(t.message, '', {
			horizontalPosition: 'right',
			verticalPosition: 'top',
			politeness: 'assertive',
			duration: APP_CONSTANTS.TOAST_DURATION_MS,
			panelClass: ['success-toast'],
		});
	}
}
