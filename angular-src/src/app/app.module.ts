import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent} from './auth/navbar/navbar.component';
import { HomeComponent } from './auth/home/home.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MessagecreateComponent} from './auth/message-create/messagecreate.component';
import { MessagelistComponent } from './auth/message-list/messagelist.component';

// Services
import { ValidateService } from './services/validate.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
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
    HttpClientModule
  ],
  // Services
  bootstrap: [AppComponent],
  providers: [
    ValidateService
  ]
})
export class AppModule { }
