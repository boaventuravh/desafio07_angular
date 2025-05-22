import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-complaints-detail-modal',
  imports: [],
  templateUrl: './complaints-detail-modal.component.html',
  styleUrl: './complaints-detail-modal.component.css'
})
export class ComplaintsDetailModalComponent {
    
    @Input() display: string = 'hidden';
    @Input() nome: string = '';
    @Input() email: string = '';
    @Input() cpf: string = '';
    @Input() sobrenome: string = '';
    @Input() telefone: string = '';
    @Input() motivoContato: string = '';
    @Input() meioContato: string = '';
    @Input() corpoMensagem: string = '';

    public changeVisibility(){
      this.display = (this.display === 'flex') ? 'hidden' : 'flex';
    }

}
