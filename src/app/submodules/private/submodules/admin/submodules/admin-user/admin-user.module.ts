import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUserRoutingModule } from './admin-user-routing.module';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { AdminUserCreateComponent } from './components/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';
import { AdminUserComponent } from './admin-user.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { AdminUserBaseComponent } from './components/admin-user-base/admin-user-base.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { EffectsModule } from '@ngrx/effects';
import { AdminUserEffects } from './effects/admin-user.effects';

@NgModule({
	declarations: [
		AdminUserListComponent,
		AdminUserCreateComponent,
		AdminUserEditComponent,
		AdminUserComponent,
		AdminUserBaseComponent,
	],
	imports: [
		CommonModule,
		AdminUserRoutingModule,
		MatCardModule,
		FlexLayoutModule,
		MatTableModule,
		NgScrollbarModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatIconModule,
		MatButtonModule,
		FontAwesomeModule,
		MatListModule,
		MatRippleModule,
		EffectsModule.forFeature([AdminUserEffects]),
	],
})
export class AdminUserModule {}
