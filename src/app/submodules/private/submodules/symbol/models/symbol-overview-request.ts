import { TradingSymbol } from '@app/submodules/symbol/models/trading-symbol';
import { SymbolOverview } from '@app/submodules/symbol/models/symbol-overview';

export class SymbolOverviewRequest {
	constructor(uuid: string) {
		this.uuid = uuid;
	}

	uuid!: string;
}
