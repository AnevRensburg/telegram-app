import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(
  private http:HttpClient
  ) { }

  userAlreadyExists(username: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users', {username: username} , {headers: headers, responseType:'json'});
  }

  validateFields(user: any){
    if(user.username == undefined || user.username == "" || user.password == undefined || user.password == ""){
      return false;
    } else {
      return true;
    }
  }

  validateMessage(message: string){
    if(message == undefined || message == ""){
      return ('Message empty');
    } else if(message.length > 4000){
      return ('Message too long');
    } else {
      return true;
    }
  }
  
}
