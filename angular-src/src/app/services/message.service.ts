import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private http: HttpClient
  ) {}

  authToken: any;

  // Store Message Data Locally (port 3000)
  storeMessageData(messageData: any){
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.post('http://localhost:3000/messages/message', messageData, {headers: headers, responseType:'json'});
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


