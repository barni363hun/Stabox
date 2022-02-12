import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageCardComponent } from './components/package/package-card/package-card.component';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { MyPackagesPageComponent } from './components/pages/my-packages-page/my-packages-page.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'mypackages', component: MyPackagesPageComponent },
  { path: 'test', component: PackageCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
