import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

import { TOKEN_NAME } from '../services/auth.constant';

@Injectable()
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;

  constructor() {
  }

  login(accessToken: string) {
    accessToken = accessToken['response'];
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    this.accessToken = accessToken;
    localStorage.setItem(TOKEN_NAME, accessToken);
  }
  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }
}
