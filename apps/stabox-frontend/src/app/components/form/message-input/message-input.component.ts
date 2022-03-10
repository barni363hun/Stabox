import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactusService } from '../../../services/contactus.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  constructor(public contactService:ContactusService) { }

  ngOnInit(): void {
  }

}
