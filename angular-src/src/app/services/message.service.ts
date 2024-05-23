import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public latestMessages = new BehaviorSubject<any>(1);

  constructor(
    private http: HttpClient
  ) {}

  updateValue() {
    this.latestMessages.next(1);
  }

  authToken: any;
  
  // Store Message Data Locally (port 3000)
  storeMessageData(message: any){
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.post('http://localhost:3000/messages/message', message, {headers: headers, responseType:'json'});
  }

  // Get Message Data Locally (port 3000)
  getMessages(){
    return this.http.get('http://localhost:3000/messages', {responseType:'json'});    
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}



