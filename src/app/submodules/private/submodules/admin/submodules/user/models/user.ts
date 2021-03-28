import { PrivateRole } from '@app/public/submodules/user/models/privateRole';

export interface User {
	id: number;
	uuid: string;
	username: string;
	privateRole: PrivateRole;
	createdAt: Date;
	updatedAt: Date;
}
