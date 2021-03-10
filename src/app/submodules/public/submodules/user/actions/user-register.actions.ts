import { createAction, props } from '@ngrx/store';
import { User } from '@app/public/submodules/user/models/user';
import { ServerError } from '@app/shared/models/server-error';
import { RegisterRequest } from '@app/public/submodules/user/models/register-request';

export const USER_REGISTER = '[User] User Register';
export const USER_REGISTER_SUCCESS = '[User] User Register Success';
export const USER_REGISTER_FAILURE = '[User] User Register Failure';

export const userRegister = createAction(
	USER_REGISTER,
	props<RegisterRequest>()
);

export const userRegisterSuccess = createAction(
	USER_REGISTER_SUCCESS,
	props<User>()
);

export const userRegisterFailure = createAction(
	USER_REGISTER_FAILURE,
	props<ServerError>()
);
