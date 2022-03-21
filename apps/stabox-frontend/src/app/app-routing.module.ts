import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AddPackageComponent } from './components/package/add-package/add-package.component';
import { AddRecieverWithAddressComponent } from './components/package/add-reciever-with-address/add-reciever-with-address.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from './services';

import {
  MainpageComponent,
  AccountPageComponent,
  PackagesPageComponent,
  HomePageComponent,
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
