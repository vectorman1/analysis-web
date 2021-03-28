import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { TokenUser } from '@app/public/submodules/user/models/tokenUser';
import jwtDecode from 'jwt-decode';

@Injectable()
export class JwtService {
	getUser(token: string): TokenUser | null {
		try {
			return jwtDecode<TokenUser>(token);
		} catch (Error) {
			return null;
		}
	}
}
