import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PrivateRoutingModule } from '@app/private/private-routing.module';
import { PrivateComponent } from '@app/private/private.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { IdentityInterceptor } from '@app/private/interceptors/identity.interceptor';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
	declarations: [PrivateComponent],
	imports: [
		PrivateRoutingModule,
		MatSidenavModule,
		MatToolbarModule,
		CommonModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatGridListModule,
		FlexModule,
	],
	exports: [PrivateComponent],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: IdentityInterceptor,
			multi: true,
		},
	],
})
export class PrivateModule {}
