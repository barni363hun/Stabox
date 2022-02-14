import { EventEmitter, Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userChanged: EventEmitter<User | undefined | null> = new EventEmitter();
  user: User | undefined | null = {};

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.user$.subscribe((u) => {
      this.user = u;
      this.userLoggedIn(u);
    });
    this.userChanged.subscribe((u) => {
      console.group('user');
      console.log(u);
      console.groupEnd();
      if (u) {
        this.createUser();
      }
    });
  }

  private userLoggedIn(u: User | undefined | null) {
    this.userChanged.emit(u);
  }

  private createUser() {
    this.http
      .get(environment.apiURL + '/dog', { responseType: 'text' })
      .subscribe((resp) => console.log(resp));

    // this.http
    //   .put<any>(environment.apiURL + '/user', {
    //     email: u.email,
    //     username: u.nickname,
    //   })
    //   .subscribe((data) => console.log(data));
  }

  public login() {
    this.authService.loginWithRedirect().subscribe((a) => console.log(a));
  }

  public logout() {
    this.authService.logout();
  }
}
