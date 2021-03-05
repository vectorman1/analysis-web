import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PrivateRoutingModule } from '@app/private/private-routing.module';
import { PrivateComponent } from '@app/private/private.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	declarations: [PrivateComponent],
	imports: [
		PrivateRoutingModule,
		MatSidenavModule,
		MatToolbarModule,
		CommonModule,
		MatListModule,
		MatIconModule,
		HttpClientModule,
		MatButtonModule,
		MatGridListModule,
	],
	exports: [PrivateComponent],
})
export class PrivateModule {}
