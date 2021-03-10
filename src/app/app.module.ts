import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivateModule } from '@app/private/private.module';
import { PrivateRoutingModule } from '@app/private/private-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@app/root/reducers';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserService } from '@app/public/submodules/user/services/user.service';
import { JwtService } from '@app/public/submodules/user/services/jwt.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorToastInterceptor } from '@app/root/interceptors/error-toast.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CorsInterceptor } from '@app/root/interceptors/cors.interceptor';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatIconModule,
		PrivateModule,
		ToastrModule.forRoot(),
		StoreModule.forRoot(reducers, {
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true,
			},
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 50,
		}),
		EffectsModule.forRoot(),
	],
	providers: [
		UserService,
		JwtService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorToastInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CorsInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
