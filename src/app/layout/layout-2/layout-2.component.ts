import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {LayoutService} from '../layout.service';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout-2',
  templateUrl: './layout-2.component.html',
  styles: [':host { display: block; }', ':host ::ng-deep .layout-loading .sidenav-link { transition: none !important; }']
})
export class Layout2Component implements AfterViewInit, OnDestroy {
  // Prevent "blink" effect
  public initialized = false;
  currentUser: User;

  constructor(private authService: AuthenticationService,
              public router: Router,
              private layoutService: LayoutService) {

    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });

    if (authService.currentUserValue == null) {
      this.router.navigate(['dashboard']);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initialized = true;

      this.layoutService.init();
      this.layoutService.update();
      this.layoutService.setAutoUpdate(true);
    });
  }

  ngOnDestroy() {
    setTimeout(() => {
      this.layoutService.destroy();
    });
  }

  closeSidenav() {
    setTimeout(() => {
      this.layoutService.setCollapsed(true);
    });
  }
}
