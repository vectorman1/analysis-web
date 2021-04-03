import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSymbolBaseComponent } from '@app/submodules/admin/submodules/admin-symbol/components/admin-symbol-base/admin-symbol-base.component';

const routes: Routes = [
	{
		path: '',
		component: AdminSymbolBaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminSymbolRoutingModule {}
