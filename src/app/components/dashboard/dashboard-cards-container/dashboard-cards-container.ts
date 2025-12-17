import { Component } from '@angular/core';
import { Doughnut } from "../../shared/doughnut/doughnut";

@Component({
  selector: 'app-dashboard-cards-container',
  imports: [Doughnut],
  templateUrl: './dashboard-cards-container.html',
  styles: `
  .flex-main-item {
    flex: 0 0 calc(100% - 20px);

    @media (min-width: 464px) {
      flex: 0 0 calc(50% - 20px);
    }

    @media (min-width: 639px) {
      flex: 0 0 calc(33.3333% - 20px);
    }

    @media (min-width: 1280px) {
      flex: none;
    }
  }
  .flex-last-2 {
    flex: 0 0 calc(100% - 20px);

    @media (min-width: 464px) {
      flex: 0 0 calc(50% - 20px)
    }
  }
  `,
})
export class DashboardCardsContainer {

}
