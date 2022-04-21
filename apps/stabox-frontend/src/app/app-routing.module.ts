import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { UserService } from './services';

import {
  MainpageComponent,
  AccountPageComponent,
  PackagesPageComponent,
  HomePageComponent,
  ProfilePageComponent,
  ExchangeDatesComponent,
  AddressesComponent,
  AddPackageComponent,
  AddRecieverWithAddressComponent,
  PackagesComponent,
} from './components';

@Component({
  template: '',
})
class LogoutComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.logout();
  }
}

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    pathMatch: 'full',
  },
  {
    path: 'account',
    component: AccountPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'packages',
    component: PackagesPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dates',
    component: ExchangeDatesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addresses',
    component: AddressesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'package',
    component: PackagesComponent,
    canActivate: [AuthGuard],
  },

  { path: 'logout', component: LogoutComponent },
  { 
    path: '**',
    component: MainpageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
