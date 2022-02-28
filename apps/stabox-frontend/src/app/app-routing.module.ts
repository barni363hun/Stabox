import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AccountPageNavbarComponent } from './components/account-page-navbar/account-page-navbar.component';
import { AddPackageComponent } from './components/package/add-package/add-package.component';
import { AddRecieverWithAddressComponent } from './components/package/add-reciever-with-address/add-reciever-with-address.component';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { MyPackagesPageComponent } from './components/pages/my-packages-page/my-packages-page.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from './services';

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
    component: MyPackagesPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'test', component: AddPackageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: MainpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
