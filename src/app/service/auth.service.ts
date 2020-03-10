import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  authenticated = false;
  private tokenUrl: string;

  constructor(private http: HttpClient) {
    this.tokenUrl = 'http://localhost:8081/welfare-team-api/token';
  }

  login(credentials, callback) {
  
    console.log("111111111");

    this.http.post(this.tokenUrl, credentials).subscribe(response => this.setSession(response));
    return callback && callback();
  }
          
  private setSession(authResult) {
    console.log("22222222 stockage ");
    const expiresAt = Date.now() + authResult.expiresIn * 1000;

    localStorage.setItem('token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    console.log(this.getToken());
  }          

  getToken() {
    return localStorage.getItem('token');
  }
  
  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return Date.now() > this.getExpiration();
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return new Date(expiresAt).getTime();
  }    
}
