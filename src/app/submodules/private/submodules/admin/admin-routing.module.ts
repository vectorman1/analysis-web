import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '@app/shared/guards/user.guard';
import { AdminComponent } from '@app/submodules/admin/admin.component';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';
import { AdminBaseComponent } from '@app/submodules/admin/components/admin-base/admin-base.component';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		canActivate: [UserGuard],
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: AdminBaseComponent,
			},
			{
				path: PRIVATE_ROUTES.ADMIN.USER.BASE,
				loadChildren: () =>
					import('./submodules/admin-user/admin-user.module').then(
						(m) => m.AdminUserModule
					),
			},
			{
				path: PRIVATE_ROUTES.ADMIN.SYMBOL.BASE,
				loadChildren: () =>
					import(
						'./submodules/admin-symbol/admin-symbol.module'
					).then((m) => m.AdminSymbolModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
