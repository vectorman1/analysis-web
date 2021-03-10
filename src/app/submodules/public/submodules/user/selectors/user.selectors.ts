import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	userFeatureKey,
	IdentityState,
} from '@app/public/submodules/user/reducers/user.reducer';
import { AppState } from '@app/root/reducers';

const selectUser = createFeatureSelector<AppState, IdentityState>(
	userFeatureKey
);

export const selectUserIdentity = createSelector(
	selectUser,
	(state: IdentityState) => state.identity
);
