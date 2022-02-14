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
  userInitialized: Observable<User | undefined | null> = this.authService.user$;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.userInitialized.subscribe((u) => {
      this.user = u;
      console.group('user');
      console.log(u);
      console.groupEnd();
      if (u && !this.user) {
        this.createUser(u);
      }
    });
  }

  private createUser(u: User) {
    this.http
      .get(environment.apiURL + '/cat', { responseType: 'text' })
      .subscribe((resp) => console.log(resp));
    // this.http
    //   .put(environment.apiURL + '/user', {
    //     email: u.email,
    //     username: u.nickname,
    //   })
    //   .subscribe((data) => console.log(data));
  }

  public login() {
    this.authService.loginWithRedirect();
  }

  public logout() {
    this.authService.logout();
  }
}
