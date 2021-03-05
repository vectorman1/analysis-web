import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
	PRIVATE_ROUTES,
	PUBLIC_ROUTES,
} from '@app/root/constants/route.constants';
import { AppComponent } from '@app/root/app.component';

const routes: Routes = [
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: '',
				redirectTo: PUBLIC_ROUTES.BASE,
				pathMatch: 'full',
			},
			{
				path: PUBLIC_ROUTES.BASE,
				loadChildren: () =>
					import(`./submodules/public/public.module`).then(
						(m) => m.PublicModule
					),
			},
			{
				path: PRIVATE_ROUTES.BASE,
				loadChildren: () =>
					import(`./submodules/private/private.module`).then(
						(m) => m.PrivateModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
