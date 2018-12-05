import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME } from '../services/auth.constant';
import { Body } from '@angular/http/src/body';

@Injectable()
export class AuthenticationService {
  static AUTH_TOKEN = 'http://localhost:8080/user/login';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const body = { 'fullName': username, 'passWord': password, 'status': '', 'email': '' };
         return this.http.post<string>(AuthenticationService.AUTH_TOKEN, body);
  }
}
