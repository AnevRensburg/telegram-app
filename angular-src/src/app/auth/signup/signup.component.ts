import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username!: string;
  password!: string;

  constructor(){}

  onSignupSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
  }
}
