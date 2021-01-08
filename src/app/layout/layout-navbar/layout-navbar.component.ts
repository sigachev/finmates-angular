import {Component, HostBinding, Input} from '@angular/core';
import {AppService} from '../../app.service';
import {LayoutService} from '../../layout/layout.service';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styles: [':host { display: block; }']
})
export class LayoutNavbarComponent {
  isExpanded = false;
  isRTL: boolean;
  currentUser: User;

  @Input() sidenavToggle = true;

  @HostBinding('class.layout-navbar') hostClassMain = true;

  constructor(private authService: AuthenticationService,
              private appService: AppService,
              private layoutService: LayoutService) {
    this.isRTL = appService.isRTL;

    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }

  logOut() {
    this.authService.logOut();
  }

}
