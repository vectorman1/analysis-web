import { Component, OnInit } from '@angular/core';
import { AdministrationOptionModel } from '@app/submodules/admin/models/administration-option.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-user-base',
	templateUrl: './user-base.component.html',
	styleUrls: ['./user-base.component.scss'],
})
export class UserBaseComponent implements OnInit {
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
				subtitle: 'Create a new user',
				route: './create',
			},
		],
	];

	constructor() {}

	ngOnInit(): void {}
}
