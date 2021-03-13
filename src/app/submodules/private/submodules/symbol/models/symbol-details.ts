import { TradingSymbol } from '@app/submodules/symbol/models/tradingSymbol';
import { SymbolOverview } from '@app/submodules/symbol/models/symbol-overview';

export class SymbolDetailsRequest {
	constructor(uuid: string) {
		this.uuid = uuid;
	}

	uuid!: string;
}

export class SymbolDetails {
	symbol!: TradingSymbol;
	details!: SymbolOverview;
}
