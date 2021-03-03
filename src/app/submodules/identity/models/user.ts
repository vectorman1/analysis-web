import { Role } from '@app/identity/models/role';

export class User {
	uuid: string;
	username: string;
	role: Role;

	constructor(uuid: string, username: string, role: Role) {
		this.uuid = uuid;
		this.username = username;
		this.role = role;
	}
}
