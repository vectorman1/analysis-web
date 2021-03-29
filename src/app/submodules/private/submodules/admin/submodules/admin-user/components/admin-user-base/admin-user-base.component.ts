import { Component, OnInit } from '@angular/core';
import { AdministrationOptionModel } from '@app/submodules/admin/models/administration-option.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-admin-user-base',
	templateUrl: './admin-user-base.component.html',
	styleUrls: ['./admin-user-base.component.scss'],
})
export class AdminUserBaseComponent implements OnInit {
	optionLists: AdministrationOptionModel[][] = [
		[
			{
				matIcon: 'list',
				isMatIcon: true,
				faIcon: faCoffee,
				title: 'List',
				subtitle: 'List all users',
				route: './list',
			},
			{
				matIcon: 'person_add',
				isMatIcon: true,
				faIcon: faCoffee,
				title: 'Create',
				subtitle: 'Create a new admin-user',
				route: './create',
			},
		],
	];

	constructor() {}

	ngOnInit(): void {}
}
