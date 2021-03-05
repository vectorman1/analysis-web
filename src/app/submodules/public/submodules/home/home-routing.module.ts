import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '@app/public/submodules/home/components/landing/landing.component';
import { HomeComponent } from '@app/public/submodules/home/home.component';
import { PUBLIC_ROUTES } from '@app/root/constants/route.constants';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: '', redirectTo: PUBLIC_ROUTES.HOME.LANDING },
			{ path: PUBLIC_ROUTES.HOME.LANDING, component: LandingComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
