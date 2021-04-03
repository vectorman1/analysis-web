import { Injectable } from '@angular/core';
import { ServerError } from '@app/shared/models/server-error';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import { MatSnackBarConfig } from '@angular/material/snack-bar/snack-bar-config';
import { environment } from '@env/environment';

@Injectable()
export class ToastService {
	errorConfig: MatSnackBarConfig = {
		horizontalPosition: 'right',
		verticalPosition: 'top',
		politeness: 'assertive',
		duration: APP_CONSTANTS.TOAST_DURATION_MS,
		panelClass: ['error-toast'],
	};

	successConfig: MatSnackBarConfig = {
		horizontalPosition: 'right',
		verticalPosition: 'top',
		politeness: 'assertive',
		duration: APP_CONSTANTS.TOAST_DURATION_MS,
		panelClass: ['success-toast'],
	};

	constructor(private snackbar: MatSnackBar) {}

	openErrorToast(err: any) {
		this.snackbar.open(err.error.message, '', this.errorConfig);
	}

	openSuccessToast(t: any) {
		this.snackbar.open(t.message, '', this.successConfig);
	}
}
