import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './user.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { UserService } from '@app/public/submodules/user/services/user.service';
@NgModule({
	declarations: [LoginComponent, RegisterComponent, UserComponent],
	imports: [
		CommonModule,
		UserRoutingModule,
		MatCardModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatRippleModule,
		MatSelectModule,
		MatIconModule,
		MatInputModule,
		MatDividerModule,
		MatCheckboxModule,
		EffectsModule.forFeature([UserEffects]),
	],
	providers: [UserService],
})
export class UserModule {}
