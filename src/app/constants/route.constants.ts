import { environment } from '@env/environment';

const setRoute = (subRoute: any) => `${environment.apiBaseUrl}${subRoute}`;

export const API_ROUTES = {
	DASHBOARD: {
		HOME: setRoute('aggregate'), // TODO Pass request params for aggregate
	},
	SYMBOL: {
		PAGED: setRoute('symbols/paged'),
		DETAILS: (uuid: string) => setRoute(`symbols/${uuid}/details`),
	},
	USER: {
		LOGIN: setRoute('users/login'),
		REGISTER: setRoute('users/register'),
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
