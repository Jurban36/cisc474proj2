import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel', 
    templateUrl: './carousel.component.html',
    providers: [NgbCarouselConfig]
})
export class CarouselComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.pauseOnHover = false;
  }
}