import { environment } from '@env/environment';

const setRoute = (subRoute: any) => `${environment.apiBaseUrl}${subRoute}`;

export const API_ROUTES = {
	DASHBOARD: {
		HOME: setRoute('aggregate'), // TODO Pass request params for aggregate
	},
	SYMBOL: {
		PAGED: setRoute('symbols/paged'),
	},
	USER: {
		LOGIN: setRoute('users/login'),
		REGISTER: setRoute('users/register'),
	},
};

export const PRIVATE_ROUTES = {
	BASE: 'private',

	DASHBOARD: {
		BASE: 'dashboard',
		HOME: 'dashboard/home',
	},
	SYMBOL: {
		BASE: 'symbol',
		HOME: 'symbol/home',
	},
};
