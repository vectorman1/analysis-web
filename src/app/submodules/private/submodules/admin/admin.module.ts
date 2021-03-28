import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminBaseComponent } from './components/admin-base/admin-base.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [AdminComponent, AdminBaseComponent],
	imports: [
		CommonModule,
		AdminRoutingModule,
		FlexLayoutModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatRippleModule,
		FontAwesomeModule,
		MatListModule,
	],
})
export class AdminModule {}
