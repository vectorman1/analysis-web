import { createAction, props } from '@ngrx/store';
import { LoginRequest } from '@app/identity/models/request';
import { AuthResponse } from '@app/identity/models/response';
import { ServerError } from '@app/shared/models/server-error';

export const IDENTITY_REGISTER = '[Identity] Register';
export const IDENTITY_REGISTER_SUCCESS = '[Identity] Register Success';
export const IDENTITY_REGISTER_FAILURE = '[Identity] Register Failure';

export const identityRegister = createAction(
	IDENTITY_REGISTER,
	props<LoginRequest>()
);

export const identityRegisterSuccess = createAction(
	IDENTITY_REGISTER_SUCCESS,
	props<AuthResponse>()
);

export const identityRegisterFailure = createAction(
	IDENTITY_REGISTER_FAILURE,
	props<ServerError>()
);
