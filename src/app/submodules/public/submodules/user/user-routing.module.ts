import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/public/submodules/user/components/login/login.component';
import { RegisterComponent } from '@app/public/submodules/user/components/register/register.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login',
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}
