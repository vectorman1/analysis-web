import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [PublicComponent],
	imports: [
		CommonModule,
		PublicRoutingModule,
		MatToolbarModule,
		MatButtonModule,
		FlexLayoutModule,
	],
})
export class PublicModule {}
