import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'apps/stabox-frontend/src/app/services';
import { ContactusService } from 'apps/stabox-frontend/src/app/services/contactus.service';

@Component({
  selector: 'app-third-card',
  templateUrl: './third-card.component.html',
  styleUrls: ['./third-card.component.scss'],
})
export class ThirdCardComponent implements OnInit {
  constructor(
    private contactService: ContactusService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {}
  sendFeedback() {
    this.contactService.sendFeedback();
  }
}
