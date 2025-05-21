import { Component, inject, OnInit } from '@angular/core';
import { DashboardCardComponent } from "../dashboard-card/dashboard-card.component";
import { HomeSidebarComponent } from "../home-sidebar/home-sidebar.component";
import { HeadingTitleComponent } from "../heading-title/heading-title.component";
import { DashboardTableComponent } from "../dashboard-table/dashboard-table.component";
import { DashboardService } from '../../services/dashboard.service';
import { Veiculo, VinInfos } from '../../models/car';
import { DashboardCardDropdownComponent } from "../dashboard-card-dropdown/dashboard-card-dropdown.component";

@Component({
  imports: [DashboardCardComponent, HomeSidebarComponent, HeadingTitleComponent, DashboardTableComponent, DashboardCardDropdownComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit {

  dashboardService = inject(DashboardService)
  veiculos: Veiculo[] = [];
  veiculoSelecionado: Veiculo = {
    id: -1,
    vehicle: '',
    volumetotal: 0,
    connected: 0,
    softwareUpdates: 0,
    vin: '',
    img: ''
  };
  vinInfos: VinInfos = {
    id: -1,
    odometro: 0,
    nivelCombustivel: 0,
    status: '',
    lat: 0,
    long: 0
  }

  ngOnInit(): void {
    this.dashboardService.getVeiculos().subscribe({
      next: (veiculos) => {
        this.veiculos =  Object.values(veiculos) as Veiculo[];
        this.veiculoSelecionado = veiculos[0];        
      }
    });
    this.updateVinInfos(this.veiculoSelecionado);    
  }

  onChangeSelect(event: Event){
    const id = Number((event.target as HTMLSelectElement).value);
    const veiculo = this.veiculos.find((v) => v.id === id);

    if(veiculo){
      this.veiculoSelecionado = veiculo;
      this.updateVinInfos(this.veiculoSelecionado);
    }    
  }

  updateVinInfos(veiculo: Veiculo){
    this.dashboardService.getVinInfos(veiculo.vin).subscribe({
          next: (vinInfos) => {
            this.vinInfos = vinInfos as VinInfos;
          }
    });
  }
}
