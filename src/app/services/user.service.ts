import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.apiUrl + '/user';
  private usersUrl = environment.apiUrl + '/users';
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  /*  public get currentUserValue(): User {
      return this.currentUserSubject.value;
    }*/

  /*  login(user: User): Observable<any> {
      const headers = new HttpHeaders(user ? {
        authorization: 'Basic ' + btoa(user.username + ':' + user.password)
      } : {});

      return this.http.get<any> (environment.apiUrl + '/login', {headers}).pipe(
        map(response => {
          if (response) {
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.currentUserSubject.next(response);
          }
          return response;
        })
      );
    }*/

/*  logOut(): Observable<any> {
    return this.http.post(environment.apiUrl + '/logout', {}).pipe(
      map(response => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      })
    );
  }*/


  register(user: User): Observable<any> {
    return this.http.post(environment.apiUrl + '/registration', JSON.stringify(user),
  {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.usersUrl + '/all',
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  update(user: User): Observable<any> {
    return this.http.post(this.userUrl + '/update', JSON.stringify(user),
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}}).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response as User);
        }
        return response;
      })
    );
  }

  checkIfUsernameExists(username: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/user/check/username/' + username);
  }


  checkIfEmailExists(email: string): Observable<any> {
    return this.http.put(environment.apiUrl + '/user/check/email', email);
  }

}
