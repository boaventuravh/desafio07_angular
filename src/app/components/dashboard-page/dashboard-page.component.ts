import { Component } from '@angular/core';
import { DashboardCardComponent } from "../dashboard-card/dashboard-card.component";
import { HomeSidebarComponent } from "../home-sidebar/home-sidebar.component";
import { HeadingTitleComponent } from "../heading-title/heading-title.component";
import { DashboardTableComponent } from "../dashboard-table/dashboard-table.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [DashboardCardComponent, HomeSidebarComponent, HeadingTitleComponent, DashboardTableComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
