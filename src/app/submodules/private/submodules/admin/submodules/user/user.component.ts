import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	back() {
		this.router.navigate(['..']);
	}
}
