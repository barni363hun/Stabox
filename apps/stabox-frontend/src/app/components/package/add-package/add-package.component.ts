import { Component, OnInit } from '@angular/core';
import { packageInterface } from '@stabox/stabox-lib';

@Component({
  selector: 'stabox-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent implements OnInit {

  package:packageInterface|any


  constructor() { }

  ngOnInit(): void {
  }

  asd() {
    console.log(this.package)
  }
}
