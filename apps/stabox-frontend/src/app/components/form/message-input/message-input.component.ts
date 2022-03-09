import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  @Output() messageEmitter = new EventEmitter<string>();
  refreshMessage(value:string){
    this.messageEmitter.emit(value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
