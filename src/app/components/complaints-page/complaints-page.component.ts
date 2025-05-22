import { Component, inject, OnInit } from '@angular/core';
import { HeadingTitleComponent } from "../heading-title/heading-title.component";
import { HomeSidebarComponent } from "../home-sidebar/home-sidebar.component";
import { ComplaintsEmptyModalComponent } from "../complaints-empty-modal/complaints-empty-modal.component";
import { ComplaintsTableComponent } from "../complaints-table/complaints-table.component";
import { ComplaintsService } from '../../services/complaints.service';
import { Chamado } from '../../models/complaint';
import { ComplaintsDetailModalComponent } from "../complaints-detail-modal/complaints-detail-modal.component";

@Component({
  selector: 'app-complaints-page',
  imports: [HeadingTitleComponent, HomeSidebarComponent, ComplaintsEmptyModalComponent, ComplaintsTableComponent, ComplaintsDetailModalComponent],
  templateUrl: './complaints-page.component.html',
  styleUrl: './complaints-page.component.css'
})
export class ComplaintsPageComponent implements OnInit {
  complaintsService = inject(ComplaintsService)
  chamados: Chamado[] = [];

  ngOnInit(): void {
    this.complaintsService.getChamados().subscribe({
      next: (ch) => {
        this.chamados = Object.values(ch) as Chamado[];
      }
    });
  }

  detailItem(modal: ComplaintsDetailModalComponent){
    modal.changeVisibility();
    
  }

  excluirChamado(id: number) {
  this.complaintsService.deleteChamado(id).subscribe({
    next: () => {
      // Atualiza a lista local removendo o item deletado
      this.chamados = this.chamados.filter(c => c.id !== id);
    },
    error: (err) => {
      console.error('Erro ao excluir chamado:', err);
      // Aqui você pode adicionar tratamento de erro (ex: mostrar mensagem para o usuário)
    }
  });
}
}
