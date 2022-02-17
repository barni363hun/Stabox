import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html',
  styleUrls: ['./shipper-details.component.scss'],
})
export class ShipperDetailsComponent implements OnInit {
  @Output() viewDetailsEvent = new EventEmitter<Boolean>();
  viewDetails: boolean = false;

  @Input() lightMode = false;

  constructor() {
    // if (confirm('Do you want to be a shipper?')) {
    //   // if (this.user['https://www.stabox.hu/roles'].includes('user')) {
    //   //   // TODO assign shipper role
    //   // } else {
    //   //   window.alert('you need to be a full role user first!');
    //   // }
    //   console.log('yes');
    // } else {
    //   this.close();
    // }
  }

  ngOnInit(): void {}

  close() {
    this.viewDetailsEvent.emit(this.viewDetails);
  }
}
