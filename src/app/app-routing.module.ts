import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';

const routes: Routes = [
	{
		path: '',
		redirectTo: PRIVATE_ROUTES.BASE,
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
