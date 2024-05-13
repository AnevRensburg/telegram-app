import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  
  constructor(
    private http:HttpClient,
    public jwtHelper: JwtHelperService
    ) { }

  signupUser(user: any){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/signup', user, {headers: headers, responseType:'json'});
  }

  signinUser(username: string, password: string){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/signin', {username: username, password:password}, {headers: headers, responseType:'json'});
  }

  async getProfile() {
    await this.loadToken();
    console.log('Token: ' + this.authToken);
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': this.authToken
    // });
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    console.log('Headers: ' + headers);
    return this.http.get('http://localhost:3000/users/profile', {headers: headers, responseType:'json'});
  }

  storeUserData(token: string, user: any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  async loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // returns true if the token is not expired
  loggedIn(){
    return !this.jwtHelper.isTokenExpired();
  }


}


