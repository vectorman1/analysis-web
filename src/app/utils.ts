import { ServerError } from '@app/shared/models/server-error';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { FormValidationError } from '@app/root/models/form-validation-error';

export const propName = (f: (state: any) => any) => {
	const stringed = f.toString();
	const split = stringed.split('.');
	const lastElement = split.pop();
	if (!lastElement) {
		return undefined;
	}
	return lastElement.replace(/[^a-z0-9]/gi, '');
};

export function isNullOrUndefined(variable: any) {
	return variable === null || variable === undefined;
}

export function getFormValidationErrors(
	form: FormGroup
): FormValidationError[] {
	const result: FormValidationError[] = [];
	Object.keys(form.controls).forEach((key) => {
		const controlErrors: ValidationErrors | null | undefined = form.get(key)
			?.errors;
		if (controlErrors) {
			Object.keys(controlErrors).forEach((keyError) => {
				result.push(
					new FormValidationError(
						key,
						keyError,
						controlErrors[keyError]
					)
				);
			});
		}
	});

	return result;
}
