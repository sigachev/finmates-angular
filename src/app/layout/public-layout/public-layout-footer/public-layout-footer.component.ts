import {Component, HostBinding} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-public-layout-footer',
  templateUrl: './public-layout-footer.component.html',
  styleUrls: ['./public-layout-footer.component.css'],
  styles: [':host { display: block; }']
})
export class PublicLayoutFooterComponent {
  @HostBinding('class.layout-footer') hostClassMain = false;

  /*

    @HostListener('mouseover') onMouseOver() {

      this.hostClassMain = false;
    }
  */

  constructor(private appService: AppService) {
  }

  currentBg() {
    return `bg-${this.appService.layoutFooterBg}`;
  }
}
