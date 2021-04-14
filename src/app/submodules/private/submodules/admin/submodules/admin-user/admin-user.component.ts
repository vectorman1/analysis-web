import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin-user',
	templateUrl: './admin-user.component.html',
	styleUrls: ['./admin-user.component.scss'],
})
export class AdminUserComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	back() {
		this.router.navigate(['..']);
	}
}
