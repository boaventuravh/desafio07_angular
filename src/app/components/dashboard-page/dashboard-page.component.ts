import { Component, inject, OnInit } from '@angular/core';
import { DashboardCardComponent } from "../dashboard-card/dashboard-card.component";
import { HomeSidebarComponent } from "../home-sidebar/home-sidebar.component";
import { HeadingTitleComponent } from "../heading-title/heading-title.component";
import { DashboardTableComponent } from "../dashboard-table/dashboard-table.component";
import { DashboardService } from '../../services/dashboard.service';
import { Veiculo } from '../../models/car';
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

  ngOnInit(): void {
    this.dashboardService.getVeiculos().subscribe({
      //adicionar tratamento de erro 03:59:53 live benja
      next: (veiculos) => {
        this.veiculos =  Object.values(veiculos) as Veiculo[];
        this.veiculoSelecionado = veiculos[0];
      }
    })
  }

  onChangeSelect(event: Event){
    const id = Number((event.target as HTMLSelectElement).value);
    const veiculo = this.veiculos.find((v) => v.id === id);

    if(veiculo){
      this.veiculoSelecionado = veiculo;
    }
  }


}
