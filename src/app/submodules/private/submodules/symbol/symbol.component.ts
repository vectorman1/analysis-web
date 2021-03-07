import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-symbol',
	templateUrl: './symbol.component.html',
	styleUrls: ['./symbol.component.scss'],
	host: {
		class: 'flex',
	},
})
export class SymbolComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
