import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { MyPackagesPageComponent } from './components/pages/my-packages-page/my-packages-page.component';

const routes: Routes = [
  { path: '', component: MainpageComponent, pathMatch: 'full' },
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
  { path: '**', component: MainpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
