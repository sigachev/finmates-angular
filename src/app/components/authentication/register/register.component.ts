import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../../app.service';
import {User} from '../../../models/user';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css',
    '../../../../vendor/styles/pages/authentication.scss'
  ]
})
export class RegisterComponent implements OnInit {

  @ViewChild('f', {static: true}) form: NgForm;
  user: User = new User();
  errorMessage: string;
  checkboxTermsFlag = false;
  confPassword = '';
  usernameAlredyExists = false;

  constructor(private appService: AppService,
              private authService: AuthenticationService,
              private userService: UserService,
              private router: Router) {
    this.appService.pageTitle = 'Register v3 - Pages';
  }

  credentials = {
    name: '',
    email: '',
    password: ''
  };

  ngOnInit() {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/profile']);
      return;
    }
  }


  register() {
    this.userService.checkIfUsernameExists(this.user.username).subscribe(data =>
        this.usernameAlredyExists = data,
      err => {
        this.errorMessage = err.message.message;
      });


    if (this.form.valid) {
      console.log('Username already exists: ' + this.usernameAlredyExists);
      this.userService.register(this.user).subscribe(data => {
          this.router.navigate(['/login']);
        },
        err => {
          this.errorMessage = err.message.message;
        }
      );
    }
  }

}
