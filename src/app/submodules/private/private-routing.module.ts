import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateComponent } from '@app/private/private.component';

const routes: Routes = [
	{
		path: 'private',
		component: PrivateComponent,
		children: [
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full',
			},
			{
				path: 'dashboard',
				loadChildren: () =>
					import('./submodules/dashboard/dashboard.module').then(
						(m) => m.DashboardModule
					),
			},
			{
				path: 'symbol',
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
