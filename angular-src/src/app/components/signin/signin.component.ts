import { Component } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  username!: string;
  password!: string;

  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router,
    private snackBar: MatSnackBar
  ){}

  onSigninSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateSignup(user)){
      this.snackBar.open('Please fill in all fields', 'Close', {
        panelClass: ['error-snackbar']
      });
    }

    // Signin User
    this.authService.signinUser(user.username, user.password).subscribe((data: any) => {
      if (data['success']){
        this.snackBar.open('Signin was a success!', 'Close', {
          duration: 3000, 
          panelClass: ['success-snackbar']
        });
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      } else {
        this.snackBar.open("Failed to log in", 'Close', {
          panelClass: ['error-snackbar']
        });
        // Refresh the page
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/signin']);
      }); 
      }
    })
  }

}

