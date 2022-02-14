import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined | null = {};
  userInit: Observable<User | undefined | null> = this.authService.user$;
  private userInitialized = false;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.userInit.subscribe((u) => {
      if (!this.userInitialized) {
        console.group('user');
        console.log(u);
        this.userInitialized = true;
        console.groupEnd();
        this.user = u;
        if (this.user && u) {
          this.createUser(u);
        }
      }
    });
  }

  private createUser(u: User) {
    console.group('create user');
    this.http
      .put(environment.apiURL + '/user', {
        email: u.email,
        username: u.nickname,
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
