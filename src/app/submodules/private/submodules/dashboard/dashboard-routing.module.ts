import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRootComponent } from '@app/private/submodules/dashboard/components/dashboard-root/dashboard-root.component';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';
import { DashboardComponent } from '@app/submodules/dashboard/dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: PRIVATE_ROUTES.DASHBOARD.HOME,
			},
			{
				path: PRIVATE_ROUTES.DASHBOARD.HOME,
				component: DashboardRootComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
