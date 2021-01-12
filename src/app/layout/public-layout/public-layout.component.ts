import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {LayoutService} from '../layout.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css'],
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
export class PublicLayoutComponent implements AfterViewInit, OnDestroy {
  // Prevent "blink" effect
  public initialized = false;

  constructor(private layoutService: LayoutService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initialized = true;

      // Enshure that we have not '.layout-expanded' class on the html element
      this.layoutService._removeClass('layout-expanded');

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

}
