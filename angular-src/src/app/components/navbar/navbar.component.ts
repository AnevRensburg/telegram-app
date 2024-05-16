import { Component } from '@angular/core';
import { AuthService } from '../../services/authenticate.service';
import { Router  } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  onLogoutClick(){
    this.authService.logout();
    this.snackBar.open('Logged out sucessfully', 'Close', {
      duration: 3000, 
      panelClass: ['success-snackbar']
    });
    this.router.navigate(['/signin']);
    return false;
  }

}


