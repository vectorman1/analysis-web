import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PrivateRoutingModule } from '@app/private/private-routing.module';
import { PrivateComponent } from '@app/private/private.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppIdentityRequirementDirective } from './directives/app-identity-requirement.directive';
import { PrivateCommonModule } from '@app/submodules/private-common/private-common.module';

@NgModule({
	declarations: [PrivateComponent, AppIdentityRequirementDirective],
	imports: [
		PrivateRoutingModule,
		PrivateCommonModule,
		MatSidenavModule,
		MatToolbarModule,
		CommonModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatGridListModule,
		FlexModule,
		NgScrollbarModule,
	],
	exports: [PrivateComponent],
	providers: [],
})
export class PrivateModule {}
