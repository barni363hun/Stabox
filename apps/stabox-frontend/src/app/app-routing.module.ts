import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'account', component: AccountPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
