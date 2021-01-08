import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../../models/user';
import {Role} from '../../../models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../../../vendor/styles/pages/authentication.scss'
  ]
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.authService.currentUserValue) {
      if (this.authService.currentUserValue.role === Role.USER) {
        this.router.navigate(['/profile']);
      } else if (this.authService.currentUserValue.role === Role.ADMIN) {
        /*this.router.navigate(['/admin']);*/
        this.router.navigate(['/account-settings']);
      }

      return;
    }
  }

  login() {
    console.log('User: ' + JSON.stringify(this.user));
    this.authService.login(this.user).subscribe(data => {
      this.ngOnInit();
    }, err => {
      this.errorMessage = 'Username or password is incorrect';
    });

  }

}
