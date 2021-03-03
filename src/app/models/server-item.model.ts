import { ServerError } from '@app/shared/models/server-error';

export interface ServerItemBase {
	sendValue: any;
	isLoading: boolean;
	error: ServerError;
	value: any;
	isSuccess: boolean;
}

export interface ServerItem<T> extends ServerItemBase {
	value: T;
}
