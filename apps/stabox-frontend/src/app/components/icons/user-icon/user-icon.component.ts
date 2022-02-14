import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'stabox-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
})
export class UserIconComponent implements OnInit {
  pic: string | undefined = this.userService.user?.picture;
  name: string | undefined = this.userService.user?.username;
  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.userService.userInit.subscribe((u) => {
      this.name = u?.name;
      this.pic = u?.picture;
    });
  }
}
