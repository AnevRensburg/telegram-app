import { Component } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router,
    private snackBar: MatSnackBar
  ){}

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateFields(user)){
      this.snackBar.open('Please fill in all fields', 'Close', {
        panelClass: ['error-snackbar']
      });
      return false;
    }

    // Log User In
    this.authService.loginUser(user.username, user.password).subscribe((data: any) => {
      if (data['success']){
        this.snackBar.open('Log in was a success!', 'Close', {
          duration: 3000, 
          panelClass: ['success-snackbar']
        });
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      } else {
        this.snackBar.open("Wrong username or password", 'Close', {
          panelClass: ['error-snackbar']
        });
        this.username = '';
        this.password = '';
      }
    })
    return false;
  }
  

}

