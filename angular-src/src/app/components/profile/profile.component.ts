import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../services/authenticate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username!: string;

  constructor(
    private authService: AuthService
  ){}

  async ngOnInit() {
    try {
      this.authService.getProfile().subscribe(result => {
        this.username = result.user.username;
      })
    } catch (err) {
      console.log(err);
    }
  }
}
