import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { SymbolsModule } from './symbols/symbols.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module') },
    { path: 'symbols', loadChildren: () => import('./symbols/symbols.module') },
    { path: 'user', loadChildren: () => import('./user/user.module') }
]
  
@NgModule({
    imports: [
        DashboardModule,
        SymbolsModule,
        UserModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {}