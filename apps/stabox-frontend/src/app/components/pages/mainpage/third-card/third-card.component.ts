import { HttpClient } from '@angular/common/http';
import { ApplicationRef, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { SnackbarService } from 'apps/stabox-frontend/src/app/services';
import { ContactusService } from 'apps/stabox-frontend/src/app/services/contactus.service';
import { environment } from 'apps/stabox-frontend/src/environments/environment';

@Component({
  selector: 'app-third-card',
  templateUrl: './third-card.component.html',
  styleUrls: ['./third-card.component.scss']
})
export class ThirdCardComponent implements OnInit {


  constructor(private contactService:ContactusService,
    private snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }
  sendFeedback() {
  this.contactService.sendFeedback().subscribe({
    next:res=>this.snackbarService.showSuccessSnackbar('Feedback sent successFully!'),
    error:err=>this.snackbarService.showErrorSnackbar('Unexpected error!')
  })
  }
}
