import {
	Directive,
	Input,
	OnDestroy,
	OnInit,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';
import { AppState } from '@app/root/reducers';
import { Store } from '@ngrx/store';
import { selectUserIdentity } from '@app/public/submodules/user/selectors/user.selectors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { mapValue } from '@app/root/observable.helpers';
import { TokenUser } from '@app/public/submodules/user/models/tokenUser';
import { PrivateRole } from '@app/public/submodules/user/models/privateRole';

@Directive({
	selector: '[appAppIdentityRequirement]',
})
export class AppIdentityRequirementDirective implements OnInit, OnDestroy {
	@Input() appAppIdentityRequirement!: PrivateRole;

	stop$ = new Subject();
	isVisible = false;

	constructor(
		private viewContainerRef: ViewContainerRef,
		private templateRef: TemplateRef<any>,
		private store: Store<AppState>
	) {}

	ngOnDestroy(): void {
		this.stop$.next();
	}

	ngOnInit(): void {
		this.store
			.select(selectUserIdentity)
			.pipe(takeUntil(this.stop$))
			.pipe(mapValue)
			.subscribe((identity: TokenUser) => {
				if (!identity.privateRole) {
					this.viewContainerRef.clear();
				}

				if (this.appAppIdentityRequirement === identity.privateRole) {
					if (!this.isVisible) {
						this.isVisible = true;
						this.viewContainerRef.createEmbeddedView(
							this.templateRef
						);
					}
				} else {
					this.isVisible = false;
					this.viewContainerRef.clear();
				}
			});
	}
}
