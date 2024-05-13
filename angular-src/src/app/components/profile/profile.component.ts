import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: Object;

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  // ngOnInit(){
  //   this.authService.getProfile().subscribe(profile => {
  //     console.log(profile);
  //     // this.user = profile.user;
  //   },
  //   err => {
  //     console.log(err);
  //     return false;
  //   });
  // }

  async ngOnInit() {
    try {
      const profile = await this.authService.getProfile();
      console.log('PROFILE: ' + profile);
      // this.user = profile;
      // this.user = profile.user;
    } catch (err) {
      console.log(err);
    }
  }
}
