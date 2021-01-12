import {Component, HostBinding, Input} from '@angular/core';
import {User} from '../../../models/user';
import {AuthenticationService} from '../../../services/authentication.service';
import {AppService} from '../../../app.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-public-layout-navbar',
  templateUrl: './public-layout-navbar.component.html',
  styleUrls: ['./public-layout-navbar.component.css'],
  styles: [':host { display: block; }'],
  animations: [
    trigger('fade',
      [
        state('void', style({opacity: 0})),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class PublicLayoutNavbarComponent {
  isExpanded = false;
  isRTL: boolean;
  currentUser: User;

  @Input() sidenavToggle = true;

  @HostBinding('class.layout-navbar') hostClassMain = false;

  constructor(private authService: AuthenticationService,
              private appService: AppService) {
    this.isRTL = appService.isRTL;

    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }

}
