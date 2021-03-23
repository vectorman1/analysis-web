import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateComponent } from '@app/private/private.component';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';
import { UserGuard } from '@app/shared/guards/user.guard';

const routes: Routes = [
	{
		path: '',
		component: PrivateComponent,
		canActivate: [UserGuard],
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
			{
				path: PRIVATE_ROUTES.ADMIN.BASE,
				loadChildren: () =>
					import('./submodules/admin/admin.module').then(
						(m) => m.AdminModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [UserGuard],
})
export class PrivateRoutingModule {}
