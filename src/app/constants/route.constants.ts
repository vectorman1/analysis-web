import { environment } from '@env/environment';

const setRoute = (subRoute: any) => `${environment.apiBaseUrl}${subRoute}`;

export const API_ROUTES = {
	DASHBOARD: {
		HOME: setRoute('aggregate'), // TODO Pass request params for aggregate
	},
	SYMBOLS: {
		ITEM: (uuid: string) => setRoute(`symbols/${uuid}`),
		PAGED: setRoute('symbols/paged'),
		OVERVIEW: (uuid: string) => setRoute(`symbols/${uuid}/overview`),
		UPDATE_ALL: setRoute('symbols/updateAll'),
	},
	USER: {
		BASE: setRoute('users'),
		LOGIN: setRoute('users/login'),
		REGISTER: setRoute('users/register'),
		BY_UUID: (uuid: string) => setRoute(`users/${uuid}`),
		PAGED: setRoute(`users/paged`),
	},
	HISTORIES: {
		CHART: (uuid: string) => setRoute(`histories/${uuid}/chart`),
		UPDATE: setRoute('histories/update'),
	},
};

export const PRIVATE_ROUTES = {
	BASE: `private`,

	DASHBOARD: {
		BASE: `dashboard`,
		HOME: `home`,
	},
	SYMBOL: {
		BASE: `symbol`,
		LIST: `list`,
		DETAILS: `:uuid/details`,
	},
	ADMIN: {
		BASE: `admin`,
		USER: {
			BASE: `user`,
			LIST: `list`,
			CREATE: `create`,
			EDIT: `:uuid/details`,
		},
		SYMBOL: {
			BASE: 'symbol',
		},
		HISTORY: {
			BASE: 'history',
		},
	},
};

export const PUBLIC_ROUTES = {
	BASE: `public`,

	HOME: {
		BASE: `home`,
		LANDING: `landing`,
	},

	USER: {
		BASE: `user`,
		LOGIN: `login`,
		REGISTER: `register`,
	},
};
