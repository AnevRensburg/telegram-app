import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';


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

  registerUser(user: any){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers, responseType:'json'});
  }

  loginUser(username: string, password: string){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/login', {username: username, password:password}, {headers: headers, responseType:'json'});
  }

  getProfile(): Observable<any>{
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get('http://localhost:3000/users/profile', {headers: headers, responseType:'json'});
  }

  storeUserData(token: string, user: any){
    localStorage.setItem('id_token', token);
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // returns true if the token is not expired
  loggedIn(){
    return !this.jwtHelper.isTokenExpired();
  }


}


