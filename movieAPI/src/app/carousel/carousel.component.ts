import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel', 
    templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}