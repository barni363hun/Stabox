import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {
  @Output() nameEmitter = new EventEmitter<string>();
  refreshName(value:string){
    this.nameEmitter.emit(value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
