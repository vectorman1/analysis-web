import { Component, OnInit } from '@angular/core';
import { AdministrationOptionModel } from '@app/submodules/admin/models/administration-option.model';
import {
	faDollarSign as fasDollarSign,
	faCoffee as fasCoffee,
	faUsers as fasUsers,
} from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-admin-base',
	templateUrl: './admin-base.component.html',
	styleUrls: ['./admin-base.component.scss'],
})
export class AdminBaseComponent implements OnInit {
	optionLists: AdministrationOptionModel[][] = [
		[
			{
				matIcon: '',
				faIcon: fasUsers,
				isMatIcon: false,
				title: 'Users',
				subtitle: 'List or Create users',
				route: './user',
			},
		],
		[
			{
				matIcon: 'history',
				faIcon: fasDollarSign,
				isMatIcon: true,
				title: 'History',
				subtitle: 'Manage symbol histories',
				route: './history',
			},
		],
		[
			{
				matIcon: '',
				faIcon: fasDollarSign,
				isMatIcon: false,
				title: 'Symbols',
				subtitle: 'Manage symbols data',
				route: './symbol',
			},
		],
	];

	fasCoffee = fasCoffee;

	constructor() {}

	ngOnInit(): void {}
}
