import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	userFeatureKey,
	UserState,
} from '@app/public/submodules/user/reducers/user.reducer';
import { AppState } from '@app/root/reducers';

const selectUser = createFeatureSelector<AppState, UserState>(userFeatureKey);

export const selectUserLogin = createSelector(
	selectUser,
	(state: UserState) => state.identity
);
