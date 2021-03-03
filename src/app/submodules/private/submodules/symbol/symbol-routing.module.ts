import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SymbolsListComponent } from './components/symbols-list/symbols-list.component';
import { SymbolDetailsComponent } from '@app/submodules/symbol/components/symbol-details/symbol-details.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'list',
	},
	{ path: 'list', component: SymbolsListComponent },
	{ path: ':uuid/details', component: SymbolDetailsComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SymbolRoutingModule {}
