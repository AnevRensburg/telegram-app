import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http:HttpClient,
    // public jwtHelper: JwtHelperService
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

  storeUserData(token: string, user: any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // getProfile(){
  //   this.loadToken();
  //   // let headers = new HttpHeaders();
  //   const headers = new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': this.authToken
  //   });
  //   headers.append('Authorization', 'this.authToken');
  //   headers.append('Content-Type','application/json');
  //   return this.http.get('http://localhost:3000/users/profile', {headers: headers, responseType:'json'});
  // }



  // loadToken(){
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }

  // returns true if the token is not expired
  // loggedIn(){
  //   return !this.jwtHelper.isTokenExpired();
  // }
}


