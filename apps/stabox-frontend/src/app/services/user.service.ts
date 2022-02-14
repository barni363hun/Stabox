import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { userInterface } from '@stabox/stabox-lib';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user?: userInterface;
  private authUser: User | undefined | null = {};
  public userInit: Observable<User | undefined | null> = this.authService.user$;
  private userInitialized = false;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.userInit.subscribe((u) => {
      if (!this.userInitialized) {
        console.group('user');
        console.log(u);
        this.userInitialized = true;
        console.groupEnd();
        this.authUser = u;
        if (
          u &&
          this.authUser &&
          this.authUser.email &&
          this.authUser.picture &&
          this.authUser.nickname &&
          this.authUser.sub
        ) {
          const newUser: userInterface = {
            email: this.authUser.email,
            firstName: this.authUser.given_name,
            lastName: this.authUser.family_name,
            picture: this.authUser.picture,
            username: this.authUser.nickname,
            id: this.authUser.sub,
            roles: this.authUser['https://www.stabox.hu/roles'],
            // possible to add 'email_verified' if needed
          };
          if (this.authUser.phone_number_verified) {
            newUser.phoneNumber = this.authUser.phone_number;
          }
          this.user = newUser;
          console.log(this.user);
          this.createUser(this.user);
        } else {
          console.error('user cannot be created');
        }
      }
    });
  }

  private createUser(u: userInterface) {
    console.group('create user');
    this.http
      .put(environment.apiURL + '/user', {
        email: u.email,
        username: u.username,
      })
      .subscribe((res) => console.log(res));
    console.groupEnd();
  }

  public login() {
    this.authService.loginWithRedirect();
  }

  public logout() {
    this.authService.logout();
  }
}
