import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-complaints-table',
  imports: [],
  templateUrl: './complaints-table.component.html',
  styleUrl: './complaints-table.component.css'
})
export class ComplaintsTableComponent {    
    @Input() nome: string = '';
    @Input() email: string = '';
    @Input() cpf: string = '';
    @Input() sobrenome: string = '';
    @Input() telefone: string = '';
    @Input() motivoContato: string = '';
    @Input() meioContato: string = '';
    @Input() corpoMensagem: string = '';
}
