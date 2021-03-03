import { isNullOrUndefined, propName } from '@app/root/utils';
import { ServerItem, ServerItemBase } from '@app/root/models/server-item.model';
import { ServerError } from '@app/shared/models/server-error';

export function serverCallStart(
	state: any,
	action: any,
	propertyFunc: (state: any) => any
): any {
	const propertyName = propName(propertyFunc);
	if (!propertyName) {
		return;
	}

	return {
		...state,
		[propertyName]: <ServerItemBase>{
			sendValue: action.payload,
			isLoading: true,
			isSuccess: false,
			value: null,
		},
	};
}

export function serverCallSuccess(
	state: any,
	action: any,
	propertyFunc: (state: any) => any,
	requireLoading = true
): any {
	const propertyName = propName(propertyFunc);
	if (!propertyName) {
		return;
	}

	if (
		!requireLoading ||
		(!isNullOrUndefined(state[propertyName]) &&
			state[propertyName].isLoading)
	) {
		return {
			...state,
			[propertyName]: <ServerItemBase>{
				...state[propertyName],
				error: null,
				isLoading: false,
				value: action.payload,
				isSuccess: true,
			},
		};
	} else {
		return { ...state };
	}
}

export function serverCallFailure(
	state: any,
	action: { payload: ServerError },
	propertyFunc: (state: any) => any
): any {
	const propertyName = propName(propertyFunc);
	if (!propertyName) {
		return;
	}

	return {
		...state,
		[propertyName]: <ServerItemBase>{
			...state[propertyName],
			error: action.payload,
			isLoading: false,
			value: null,
			isSuccess: false,
		},
	};
}
