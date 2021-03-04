import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from '@app/public/public.component';

const routes: Routes = [
	{
		path: 'public',
		component: PublicComponent,
		children: [
			{
				path: 'user',
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
