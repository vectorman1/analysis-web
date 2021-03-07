import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-symbol-property',
	templateUrl: './symbol-property.component.html',
	styleUrls: ['./symbol-property.component.scss'],
})
export class SymbolPropertyComponent implements OnInit {
	@Input() text: string | (() => string) | undefined;
	@Input() name: string = '';
	@Input() theme: any = {};
	@Input() isLoading: boolean | null = false;
	@Input() icon: string = '';

	constructor() {}

	ngOnInit(): void {}
}
