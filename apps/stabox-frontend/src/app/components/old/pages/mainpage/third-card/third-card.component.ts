import { HttpClient } from '@angular/common/http';
import { ApplicationRef, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { SnackbarService, ThemeService } from 'apps/stabox-frontend/src/app/services';
import { ContactusService } from 'apps/stabox-frontend/src/app/services/contactus.service';
import { environment } from 'apps/stabox-frontend/src/environments/environment';

@Component({
  selector: 'app-third-card',
  templateUrl: './third-card.component.html',
  styleUrls: ['./third-card.component.scss'],
})
export class ThirdCardComponent implements OnInit {
  constructor(private contactService:ContactusService,
    private snackbarService: SnackbarService, public themeService: ThemeService) { }

  ngOnInit(): void {
  }
  sendFeedback() {
  this.contactService.sendFeedback()
  }
}
