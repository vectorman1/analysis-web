import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '@app/submodules/admin/submodules/admin-user/services/user.service';
import {
	USER_GET,
	userGetFailure,
	userGetSuccess,
} from '@app/submodules/admin/submodules/admin-user/actions/admin-user-get.actions';
import { catchError, debounceTime, exhaustMap, map } from 'rxjs/operators';
import { APP_CONSTANTS } from '@app/root/constants/app.constants';
import { User } from '@app/submodules/admin/submodules/admin-user/models/user';
import { ServerError } from '@app/shared/models/server-error';
import { of } from 'rxjs';
import {
	USER_GET_PAGED,
	userGetPagedFailure,
	userGetPagedSuccess,
} from '@app/submodules/admin/submodules/admin-user/actions/admin-user-get-paged.actions';
import { PagedRequest } from '@app/shared/models/request';
import { PagedList } from '@app/root/models/paged-list';
import {
	USER_DELETE,
	userDeleteFailure,
	userDeleteSuccess,
} from '@app/submodules/admin/submodules/admin-user/actions/admin-user-delete.actions';
import {
	USER_UPDATE,
	userUpdateFailure,
	userUpdateSuccess,
} from '@app/submodules/admin/submodules/admin-user/actions/admin-user-update.actions';
import {
	USER_CREATE,
	userCreateFailure,
	userCreateSuccess,
} from '@app/submodules/admin/submodules/admin-user/actions/admin-user-create.actions';

@Injectable()
export class AdminUserEffects {
	userGet$ = createEffect(() =>
		this.actions$.pipe(
			ofType(USER_GET),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap(({ uuid }) =>
				this.userService.get(uuid).pipe(
					map((res: User) => userGetSuccess(res)),
					catchError((err: ServerError) => of(userGetFailure(err)))
				)
			)
		)
	);

	userGetPaged$ = createEffect(() =>
		this.actions$.pipe(
			ofType(USER_GET_PAGED),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap((req: PagedRequest) =>
				this.userService.getPaged(req).pipe(
					map((res: PagedList<User>) => userGetPagedSuccess(res)),
					catchError((err: ServerError) =>
						of(userGetPagedFailure(err))
					)
				)
			)
		)
	);

	userDelete$ = createEffect(() =>
		this.actions$.pipe(
			ofType(USER_DELETE),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap(({ uuid }) =>
				this.userService.delete(uuid).pipe(
					map(() => userDeleteSuccess()),
					catchError((err: ServerError) => of(userDeleteFailure(err)))
				)
			)
		)
	);

	userUpdate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(USER_UPDATE),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap((req: User) =>
				this.userService.update(req).pipe(
					map(() => userUpdateSuccess()),
					catchError((err: ServerError) => of(userUpdateFailure(err)))
				)
			)
		)
	);

	userCreate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(USER_CREATE),
			debounceTime(APP_CONSTANTS.REQUEST_DEBOUNCE_MS),
			exhaustMap((req: User) =>
				this.userService.create(req).pipe(
					map(() => userCreateSuccess()),
					catchError((err: ServerError) => of(userCreateFailure(err)))
				)
			)
		)
	);

	constructor(private actions$: Actions, private userService: UserService) {}
}
