import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
	displayedColumns = ['id', 'username', 'password', 'actions'];
	dataSource: any;

	constructor() {}

	ngOnInit(): void {}
}
