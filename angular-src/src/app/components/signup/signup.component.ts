import { Component } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router:Router,
    private snackBar: MatSnackBar
  ){}

  onSignupSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateSignup(user)){
      this.snackBar.open('Please fill in all fields', 'Close');
    }

    // Signup User
    this.authService.signupUser(user).subscribe((data: any) => {
      if (data['success']){
        this.snackBar.open('Signup was a success!', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/signin']);
      } else {
        this.snackBar.open("Couldn't sign up", 'Close');
        this.router.navigate(['/signup']);
      }
    })
  }

}
