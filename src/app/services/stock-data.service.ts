import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class StockDataService {

  public currentUser: Observable<User>;
  private stockUrl = environment.apiUrl + '/stock';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public getPrice(symbol: string) {
    return this.http.get(this.stockUrl + '/' + symbol + '/price');
  }

  public getHistoricalQuotes(symbol: string) {
    return this.http.get(this.stockUrl + '/' + symbol + '/historicalQuotes');
  }

}
