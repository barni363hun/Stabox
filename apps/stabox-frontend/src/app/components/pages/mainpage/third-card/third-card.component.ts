import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'apps/stabox-frontend/src/environments/environment';

@Component({
  selector: 'app-third-card',
  templateUrl: './third-card.component.html',
  styleUrls: ['./third-card.component.scss']
})
export class ThirdCardComponent implements OnInit {

  comment: {
    name: any,
    email: any,
    message: any
  } = {
      name: '',
      email: '',
      message: ''
    }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  sendFeedback() {
    console.log(this.comment)
    console.log(document.getElementById('emailInput')?.innerText)
    this.http.post(environment.apiURL + '/contact-us', this.comment).subscribe({
      next:res=>console.log(res),
      error:err=>console.log(err)
    })
  }
}
