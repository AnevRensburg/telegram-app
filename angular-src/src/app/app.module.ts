import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MessagecreateComponent} from './components/message-create/messagecreate.component';
import { MessagelistComponent } from './components/message-list/messagelist.component';

// Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/authenticate.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    MessagecreateComponent,
    MessagelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('id_token');
        }
      }
    })
  ],
  // Services
  bootstrap: [AppComponent],
  providers: [
    ValidateService, 
    AuthService,
    AuthGuard
  ]
})
export class AppModule { }
