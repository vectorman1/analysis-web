import { Currency } from './currency';

export class TradingSymbol {
	id!: number;
	uuid!: string;
	currency!: Currency;
	isin!: string;
	identifier!: string;
	name!: string;
	minimumOrderQuantity!: number;
	marketName!: string;
	marketHoursGmt!: string;
	createdAt!: Date;
	updatedAt!: Date;
	deletedAt!: Date;
}

export class TradingSymbols {
	symbols!: {
		symbols: TradingSymbol[];
	};
	totalItems!: number;
}
