import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonLoadingDirective } from './directives/mat-button-loading.directive';

@NgModule({
	declarations: [MatButtonLoadingDirective],
	imports: [CommonModule],
	exports: [MatButtonLoadingDirective],
})
export class SharedModule {}
