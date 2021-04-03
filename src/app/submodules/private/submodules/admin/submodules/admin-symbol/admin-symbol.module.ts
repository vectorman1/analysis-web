import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSymbolRoutingModule } from './admin-symbol-routing.module';
import { AdminSymbolBaseComponent } from './components/admin-symbol-base/admin-symbol-base.component';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AdminSymbolEffects } from './effects/admin-symbol.effects';

@NgModule({
	declarations: [AdminSymbolBaseComponent],
	imports: [
		CommonModule,
		AdminSymbolRoutingModule,
		FlexModule,
		MatButtonModule,
		SharedModule,
		EffectsModule.forFeature([AdminSymbolEffects]),
	],
})
export class AdminSymbolModule {}
