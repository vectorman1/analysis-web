import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from '@app/public/public.component';
import { PUBLIC_ROUTES } from '@app/root/constants/route.constants';

const routes: Routes = [
	{
		path: '',
		component: PublicComponent,
		children: [
			{
				path: '',
				redirectTo: PUBLIC_ROUTES.HOME.BASE,
				pathMatch: 'full',
			},
			{
				path: PUBLIC_ROUTES.HOME.BASE,
				loadChildren: () =>
					import('./submodules/home/home.module').then(
						(m) => m.HomeModule
					),
			},
			{
				path: PUBLIC_ROUTES.USER.BASE,
				loadChildren: () =>
					import('./submodules/user/user.module').then(
						(m) => m.UserModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PublicRoutingModule {}
