import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SymbolsListComponent } from './components/symbols-list/symbols-list.component';
import { SymbolDetailsComponent } from '@app/submodules/symbol/components/symbol-details/symbol-details.component';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';
import { SymbolComponent } from '@app/submodules/symbol/symbol.component';

const routes: Routes = [
	{
		path: '',
		component: SymbolComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: PRIVATE_ROUTES.SYMBOL.LIST,
			},
			{
				path: PRIVATE_ROUTES.SYMBOL.LIST,
				component: SymbolsListComponent,
			},
			{
				path: PRIVATE_ROUTES.SYMBOL.DETAILS,
				component: SymbolDetailsComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SymbolRoutingModule {}
