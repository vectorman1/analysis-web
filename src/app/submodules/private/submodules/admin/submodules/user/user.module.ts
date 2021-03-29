import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserComponent } from './user.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { UserBaseComponent } from './components/user-base/user-base.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';

@NgModule({
	declarations: [
		UserListComponent,
		UserCreateComponent,
		UserEditComponent,
		UserComponent,
		UserBaseComponent,
	],
	imports: [
		CommonModule,
		UserRoutingModule,
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
		EffectsModule.forFeature([UserEffects]),
	],
})
export class UserModule {}
