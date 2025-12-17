import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  imports: [],
  templateUrl: './doughnut.html',
  styles: `
  .progress-ring {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  `,
})
export class Doughnut {
  @Input() percentage: number = 90;
}
