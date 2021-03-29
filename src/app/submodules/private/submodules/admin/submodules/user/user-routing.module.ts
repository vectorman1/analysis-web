import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';
import { UserComponent } from '@app/submodules/admin/submodules/user/user.component';
import { UserListComponent } from '@app/submodules/admin/submodules/user/components/user-list/user-list.component';
import { UserCreateComponent } from '@app/submodules/admin/submodules/user/components/user-create/user-create.component';
import { UserEditComponent } from '@app/submodules/admin/submodules/user/components/user-edit/user-edit.component';
import { UserBaseComponent } from '@app/submodules/admin/submodules/user/components/user-base/user-base.component';

const routes: Routes = [
	{
		path: '',
		component: UserComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: UserBaseComponent,
			},
			{
				path: PRIVATE_ROUTES.ADMIN.USER.LIST,
				pathMatch: 'full',
				component: UserListComponent,
			},
			{
				path: PRIVATE_ROUTES.ADMIN.USER.CREATE,
				pathMatch: 'full',
				component: UserCreateComponent,
			},
			{
				path: PRIVATE_ROUTES.ADMIN.USER.EDIT,
				pathMatch: 'full',
				component: UserEditComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}
