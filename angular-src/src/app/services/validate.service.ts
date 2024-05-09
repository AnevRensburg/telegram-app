import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateSignup(user: any){
    if(user.username == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }
  
}
