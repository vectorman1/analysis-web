import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@app/root/reducers';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IdentityService } from '@app/public/submodules/user/services/identity.service';
import { JwtService } from '@app/public/submodules/user/services/jwt.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorToastInterceptor } from '@app/root/interceptors/error-toast.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CorsInterceptor } from '@app/root/interceptors/cors.interceptor';
import { UnauthorizedInterceptor } from '@app/root/interceptors/unauthorized.interceptor';
import { ContentTypeInterceptor } from '@app/root/interceptors/content-type.interceptor';
import { ToastService } from '@app/shared/services/toast.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastEffects } from '@app/root/effects/toast.effects';
import { IdentityInterceptor } from '@app/root/interceptors/identity.interceptor';

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
		EffectsModule.forRoot([ToastEffects]),
		FlexLayoutModule,
		HttpClientModule,
	],
	providers: [
		IdentityService,
		JwtService,
		ToastService,
		MatSnackBar,
		Overlay,
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
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UnauthorizedInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ContentTypeInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: IdentityInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {
	constructor() {}
}
