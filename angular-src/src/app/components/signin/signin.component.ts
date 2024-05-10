import { Component } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';

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
    private router:Router
  ){}

  onSigninSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateSignup(user)){
      alert('Please fill in all fields');
    }

    // Signin User
    this.authService.signinUser(user.username, user.password).subscribe((data: any) => {
      if (data['success']){
        alert('Signin was a success!')
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      } else {
        alert('Error while logging in')
        // Refresh the page
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/signin']);
      }); 
      }
    })
  }

}

