import { ServerError } from '@app/shared/models/server-error';

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
