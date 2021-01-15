/* tslint:disable:max-line-length */
import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../../app.service';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: [
    '../../../../vendor/libs/ng-select/ng-select.scss',
    '../../../../vendor/styles/pages/account.scss',
    './account-settings.component.scss',
    '../../../../vendor/libs/ngx-toastr/ngx-toastr.scss'
  ]
})


export class AccountSettingsComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  currentUser: User;
  model: any = {};
  errorMessage: string;
  curTab = 'general';

  languages = [
    {value: 'English', label: 'English'},
    {value: 'German', label: 'German'},
    {value: 'French', label: 'French'}
  ];

  accountData = {
    avatar: '5-small.png',
    name: 'Nelle Maxwell',
    username: 'nmaxwell',
    email: 'nmaxwell@mail.com',
    company: 'Company Ltd.',
    verified: false,

    info: {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.',
      birthday: 'May 3, 1995',
      country: 'Canada',
      languages: ['English'],
      phone: '+0 (123) 456 7891',
      website: '',
      music: ['Rock', 'Alternative', 'Electro', 'Drum & Bass', 'Dance'],
      movies: ['The Green Mile', 'Pulp Fiction', 'Back to the Future', 'WALL·E', 'Django Unchained', 'The Truman Show', 'Home Alone', 'Seven Pounds'],

      twitter: 'https://twitter.com/user',
      facebook: 'https://www.facebook.com/user',
      google: '',
      linkedin: '',
      instagram: 'https://www.instagram.com/user'
    },

    notifications: {
      comments: true,
      forum: true,
      followings: false,
      news: true,
      products: false,
      blog: true
    }
  };


  constructor(private appService: AppService,
              private userService: UserService,
              private authService: AuthenticationService,
              private router: Router,
              private toastr: ToastrService) {
    this.appService.pageTitle = 'Account settings - Pages';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit(): void {

    if (!this.currentUser) {
      this.router.navigate(['/login']);
    } else {
      this.model = this.currentUser;
    }
  }

  logOut() {
    this.authService.logOut();
  }

  onSubmit() {
    console.log(this.model);

    this.userService.update(this.model).subscribe(data => {
      /* this.router.navigate(['/profile']);*/
      this.toastr.success('User updated!');
    }, err => {
      this.toastr.error('Cannot update user.');
    });
  }

  notify() {
    setTimeout(
      () =>
        this.toastr.success('It works!'), 1000
    );
  }


  showToastr() {
    console.log('Test message');
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showToast() {


    // `newestOnTop` and `preventDuplicates` options must be set on global config
    this.toastr.toastrConfig.newestOnTop = false;
    this.toastr.toastrConfig.preventDuplicates = false;

    this.toastr.success('MESSAGE');
  }
}
