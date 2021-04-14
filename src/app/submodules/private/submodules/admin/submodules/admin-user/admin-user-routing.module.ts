import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRIVATE_ROUTES } from '@app/root/constants/route.constants';
import { AdminUserComponent } from '@app/submodules/admin/submodules/admin-user/admin-user.component';
import { AdminUserListComponent } from '@app/submodules/admin/submodules/admin-user/components/admin-user-list/admin-user-list.component';
import { AdminUserCreateComponent } from '@app/submodules/admin/submodules/admin-user/components/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from '@app/submodules/admin/submodules/admin-user/components/admin-user-edit/admin-user-edit.component';
import { AdminUserBaseComponent } from '@app/submodules/admin/submodules/admin-user/components/admin-user-base/admin-user-base.component';

const routes: Routes = [
	{
		path: '',
		component: AdminUserComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: AdminUserBaseComponent,
			},
			{
				path: PRIVATE_ROUTES.ADMIN.USER.LIST,
				pathMatch: 'full',
				component: AdminUserListComponent,
			},
			{
				path: PRIVATE_ROUTES.ADMIN.USER.CREATE,
				pathMatch: 'full',
				component: AdminUserCreateComponent,
			},
			{
				path: PRIVATE_ROUTES.ADMIN.USER.EDIT,
				pathMatch: 'full',
				component: AdminUserEditComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminUserRoutingModule {}
