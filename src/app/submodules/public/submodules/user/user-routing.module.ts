import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/public/submodules/user/components/login/login.component';
import { RegisterComponent } from '@app/public/submodules/user/components/register/register.component';
import { UserComponent } from '@app/public/submodules/user/user.component';
import { PUBLIC_ROUTES } from '@app/root/constants/route.constants';

const routes: Routes = [
	{
		path: '',
		component: UserComponent,
		children: [
			{
				path: '',
				redirectTo: PUBLIC_ROUTES.USER.LOGIN,
			},
			{ path: PUBLIC_ROUTES.USER.LOGIN, component: LoginComponent },
			{ path: PUBLIC_ROUTES.USER.REGISTER, component: RegisterComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}
