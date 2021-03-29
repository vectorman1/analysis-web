import { PrivateRole } from '@app/public/submodules/user/models/privateRole';

export class TokenUser {
	uuid!: string;
	privateRole!: PrivateRole;
	exp!: Date;
	iat!: Date;
}
