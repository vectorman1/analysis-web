import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import {
	symbolFeatureKey,
	SymbolState,
} from '@app/submodules/symbol/reducers/symbol.reducer';

import { AppState } from '@app/root/reducers';

const selectSymbol = createFeatureSelector<AppState, SymbolState>(
	symbolFeatureKey
);

export const selectSymbolList = createSelector(
	selectSymbol,
	(state: SymbolState) => state.symbols
);
export const selectSymbolItem = createSelector(
	selectSymbol,
	(state: SymbolState) => state.symbolItem
);

export const selectSymbolOverview = createSelector(
	selectSymbol,
	(state: SymbolState) => state.symbolOverview
);

export const selectSymbolChart = createSelector(
	selectSymbol,
	(state: SymbolState) => state.symbolChart
);
