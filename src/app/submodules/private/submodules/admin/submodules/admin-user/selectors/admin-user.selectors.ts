import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '@app/root/reducers';
import {
	adminUserFeatureKey,
	AdminUserState,
} from '@app/submodules/admin/submodules/admin-user/reducers/admin-user.reducer';

const selectAdminUser = createFeatureSelector<AppState, AdminUserState>(
	adminUserFeatureKey
);

const selectAdminUserUsers = createSelector(
	selectAdminUser,
	(state: AdminUserState) => state.users
);

const selectAdminUserUserItem = createSelector(
	selectAdminUser,
	(state: AdminUserState) => state.userItem
);
