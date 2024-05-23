// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagecreateComponent} from './components/message-create/messagecreate.component';
import { MessagelistComponent } from './components/message-list/messagelist.component';
import { ModalComponent } from './components/modal/modal.component';

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
    LoginComponent,
    RegisterComponent,
    MessagecreateComponent,
    MessagelistComponent,
    ProfileComponent,
    ModalComponent
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
    }),
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    AgGridModule
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
