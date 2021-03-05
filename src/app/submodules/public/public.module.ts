import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
	declarations: [PublicComponent],
	imports: [CommonModule, PublicRoutingModule, MatToolbarModule],
})
export class PublicModule {}
