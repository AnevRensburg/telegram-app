import { Component } from '@angular/core';
import { AuthService } from '../../services/authenticate.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public authService: AuthService,
    private router: Router
    ) { }

  onLogoutClick(){
    this.authService.logout();
    alert('You are now signed out');
    this.router.navigate(['/signin']);
    return false;
  }

}


