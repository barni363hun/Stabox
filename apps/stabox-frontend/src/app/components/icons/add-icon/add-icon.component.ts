import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services';

@Component({
  selector: 'app-add-icon',
  templateUrl: './add-icon.component.html',
  styleUrls: ['./add-icon.component.scss']
})
export class AddIconComponent implements OnInit {

  constructor(public themeService: ThemeService) {
    themeService.getTheme();
  }

  ngOnInit(): void {
  }

}
