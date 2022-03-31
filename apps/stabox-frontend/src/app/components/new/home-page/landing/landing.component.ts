import { Component, OnInit } from '@angular/core';
import { UserService } from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
