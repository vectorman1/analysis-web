import { TradingSymbol } from '@app/shared/models/tradingSymbol';
import { SymbolOverview } from '@app/shared/models/symbol-overview';

export class SymbolDetails {
	symbol!: TradingSymbol;
	details!: SymbolOverview;
}
