import { Component } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username!: string;
  password!: string;
  registered: boolean = false;

  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router,
    private snackBar: MatSnackBar
  ){}

  onRegisterSubmit(){
    let user = {
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

    this.validateService.userAlreadyExists(user.username).subscribe((data: any) => {
      if (data['success']){
        // Register User
        this.authService.registerUser(user).subscribe((data: any) => {
          if (data['success']){
            this.snackBar.open('Register was a success!', 'Close', {
              duration: 3000, 
              panelClass: ['success-snackbar']
            });
            this.router.navigate(['/login']);
          } else {
            this.snackBar.open("Failed to register", 'Close', {
              panelClass: ['error-snackbar']
            });
            this.username = '';
            this.password = '';
          }
        })
      } else if (!data['success']){      
        this.registered = true;  
        this.snackBar.open("Username already in use, try logging in", 'Close', {
          panelClass: ['error-snackbar']
        });
        return false;
      }
      return false;

    })
    return false;
    
  }

  onRedirect(){
    this.router.navigate(['/login']);
    this.snackBar.dismiss();
  }

}
