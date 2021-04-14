import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-list',
	templateUrl: './admin-user-list.component.html',
	styleUrls: ['./admin-user-list.component.scss'],
})
export class AdminUserListComponent implements OnInit {
	displayedColumns = ['id', 'username', 'password', 'actions'];
	dataSource: any;

	constructor() {}

	ngOnInit(): void {}
}
