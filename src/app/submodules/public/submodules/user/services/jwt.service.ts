import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { User } from '@app/public/submodules/user/models/user';
import jwtDecode from 'jwt-decode';

@Injectable()
export class JwtService {
	getUser(token: string): User | null {
		try {
			return jwtDecode<User>(token);
		} catch (Error) {
			return null;
		}
	}
}
