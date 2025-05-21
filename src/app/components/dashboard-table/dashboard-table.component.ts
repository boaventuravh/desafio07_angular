import { Component, inject, Input } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

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

  dashboardService = inject(DashboardService)

  onChangeVin(event: Event){
    const vin = (event.target as HTMLInputElement).value
    this.dashboardService.getVinInfos(vin).subscribe({
      next: (vinInfos) => {
        this.odometro = vinInfos.odometro;
        this.nivelCombustivel = vinInfos.nivelCombustivel;
        this.status = vinInfos.status;
        this.lat = vinInfos.lat;
        this.long = vinInfos.long;
      }
    })
  }
}
