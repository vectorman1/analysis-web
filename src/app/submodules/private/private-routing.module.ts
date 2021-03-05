import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateComponent } from '@app/private/private.component';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';

const routes: Routes = [
	{
		path: '',
		component: PrivateComponent,
		children: [
			{
				path: '',
				redirectTo: PRIVATE_ROUTES.DASHBOARD.BASE,
				pathMatch: 'full',
			},
			{
				path: PRIVATE_ROUTES.DASHBOARD.BASE,
				loadChildren: () =>
					import('./submodules/dashboard/dashboard.module').then(
						(m) => m.DashboardModule
					),
			},
			{
				path: PRIVATE_ROUTES.SYMBOL.BASE,
				loadChildren: () =>
					import('./submodules/symbol/symbol.module').then(
						(m) => m.SymbolModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PrivateRoutingModule {}
