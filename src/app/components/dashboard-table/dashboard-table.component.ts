import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  imports: [],
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.css'
})
export class DashboardTableComponent {
  @Input() vin: string = '';
  @Input() odometro: number = 0;
  @Input() nivelCombustivel: number = 0;
  @Input() status: string = "";
  @Input() lat: number = 0;
  @Input() long: number = 0;
}
