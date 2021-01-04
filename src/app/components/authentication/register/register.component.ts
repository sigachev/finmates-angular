import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css',
    '../../../../vendor/styles/pages/authentication.scss'
  ]
})
export class RegisterComponent  {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Register v3 - Pages';
  }

  credentials = {
    name: '',
    email: '',
    password: ''
  };

}
