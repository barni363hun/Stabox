import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactusService } from '../../../../services/contactus.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {
  constructor(public contactService:ContactusService) { }

  ngOnInit(): void {
  }

}
