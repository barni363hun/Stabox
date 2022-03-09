import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { observable, Observable } from 'rxjs';


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
  constructor() { }

  ngOnInit(): void {
  }

}
