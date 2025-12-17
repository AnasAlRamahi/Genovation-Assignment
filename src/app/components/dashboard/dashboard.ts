import { Component } from '@angular/core';
import { DashboardCardsContainer } from "./dashboard-cards-container/dashboard-cards-container";
import { DashboardShiftTables } from "./dashboard-shift-tables/dashboard-shift-tables";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCardsContainer, DashboardShiftTables],
  templateUrl: './dashboard.html',
  styles: ``,
})
export class Dashboard {

}
