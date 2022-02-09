import { EventEmitter, Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userChanged: EventEmitter<User | undefined | null> = new EventEmitter();
  user: User | undefined | null = {};

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe((u) => {
      console.log(u);
      this.user = u;
      this.userLoggedIn(u);
    });
  }

  private userLoggedIn(u: User | undefined | null) {
    this.userChanged.emit(u);
  }
}
