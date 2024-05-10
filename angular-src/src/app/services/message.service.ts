import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private http: HttpClient
  ) {}

  // Store Message Data Locally (port 3000)
  storeMessageData(messageData: any){
    localStorage.setItem('messageData', JSON.stringify(messageData));
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/messages/message', messageData, {headers: headers, responseType:'json'});
  }

  // Get Message Data Locally (port 3000)
  getMessages(){
    return this.http.get('http://localhost:3000/messages', {responseType:'json'});    
  }
}



