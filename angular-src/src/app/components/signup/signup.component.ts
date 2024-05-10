import { Component } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username!: string;
  password!: string;

  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router
  ){}

  onSignupSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateSignup(user)){
      alert('Please fill in all fields');
    }

    // Signup User
    this.authService.signupUser(user).subscribe((data: any) => {
      if (data['success']){
        alert('Signup was a success!')
        this.router.navigate(['/signin']);
      } else {
        alert('Something went wrong...')
        this.router.navigate(['/signup']);
      }
    })
  }

}
