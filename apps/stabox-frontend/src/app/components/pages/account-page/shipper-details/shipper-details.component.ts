import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html',
  styleUrls: ['./shipper-details.component.scss']
})
export class ShipperDetailsComponent implements OnInit {

  @Output() viewDetailsEvent = new EventEmitter<Boolean>();
  viewDetails: boolean = false;

  @Input() lightMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.viewDetailsEvent.emit(this.viewDetails);
  }

}
