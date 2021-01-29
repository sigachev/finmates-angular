import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StockDataService} from '../../services/stock-data.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public symbol = '';
  public title: string;
  public price = 0;
  width;
  height;


  constructor(private route: ActivatedRoute,
              private dataService: StockDataService) {

  }


  ngOnInit(): void {
    this.title = 'Sales Analysis';
    this.symbol = this.route.snapshot.paramMap.get('symbol');
    this.dataService.getPrice(this.symbol).subscribe((data: any[]) => {
      console.log(data);
      this.price = +data;
    });
  }





}
