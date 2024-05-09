import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './auth/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
