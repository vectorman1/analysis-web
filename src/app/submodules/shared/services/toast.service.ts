import { Injectable } from '@angular/core';
import { ServerError } from '@app/shared/models/server-error';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';

@Injectable()
export class ToastService {
	constructor(private snackbar: MatSnackBar) {}
	openErrorToast(err: ServerError) {
		this.snackbar.open(err.message, '', {
			horizontalPosition: 'right',
			verticalPosition: 'top',
			politeness: 'assertive',
			duration: APP_CONSTANTS.TOAST_DURATION_MS,
			panelClass: ['error-toast'],
		});
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
