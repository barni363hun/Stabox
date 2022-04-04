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
    path: 'home',
    component: HomePageComponent,
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

  { path: 'test1', component: AddRecieverWithAddressComponent },
  { path: 'test', component: AddPackageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: MainpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
