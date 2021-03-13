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
export const selectSymbolDetails = createSelector(
	selectSymbol,
	(state: SymbolState) => state.symbolDetails
);

export const selectSymbolChart = createSelector(
	selectSymbol,
	(state: SymbolState) => state.symbolChart
);
