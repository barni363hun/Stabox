import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { ContactusService } from '../../../../services/contactus.service';


@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnInit {
  @Output() emailEmitter = new EventEmitter<string>();
  refreshEmail(value:string){
    this.emailEmitter.emit(value)
  }
  constructor(public contactService:ContactusService) { }

  ngOnInit(): void {
  }

}
