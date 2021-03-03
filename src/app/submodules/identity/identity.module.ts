import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { IdentityService } from '@app/identity/services/identity.service';
import { StoreModule } from '@ngrx/store';
import * as fromState from '@app/root/reducers';
import * as fromIdentity from '@app/identity/reducers/identity.reducer';
import { LoginEffects } from './effects/login.effects';
import { RegisterEffects } from './effects/register.effects';

@NgModule({
	imports: [
		EffectsModule.forFeature([LoginEffects, RegisterEffects]),
		StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, {
			metaReducers: fromState.metaReducers,
		}),
		StoreModule.forFeature(
			fromIdentity.identityFeatureKey,
			fromIdentity.reducer
		),
	],
	providers: [IdentityService],
})
export class IdentityModule {}
