import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({opacity: 0})),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document,
              private appService: AppService) {
    this.appService.pageTitle = 'Finmates - Social Stock Trading Platform';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 200) {
      const element = document.getElementById('navbar1');
      element.classList.remove('pt-lg-4');
      element.classList.remove('navbar-light');
      element.classList.add('landing-navbar-alt');
      element.classList.add('bg-white');
      element.classList.add('py-1');
      const element1 = document.getElementById('container1');
      element1.classList.remove('container-fluid');
      element1.classList.add('container');

    } else {
      const element = document.getElementById('navbar1');
      element.classList.add('pt-lg-4');
      element.classList.add('navbar-light');
      element.classList.remove('landing-navbar-alt');
      element.classList.remove('bg-white');
      element.classList.remove('py-1');
      const element1 = document.getElementById('container1');
      element1.classList.add('container-fluid');
      element1.classList.remove('container');
    }
  }

  ngOnInit(): void {
  }

}
