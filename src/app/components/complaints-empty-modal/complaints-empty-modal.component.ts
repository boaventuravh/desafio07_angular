import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chamado } from '../../models/complaint';

@Component({
  selector: 'app-complaints-empty-modal',
  imports: [],
  templateUrl: './complaints-empty-modal.component.html',
  styleUrl: './complaints-empty-modal.component.css'
})
export class ComplaintsEmptyModalComponent{
  
  router = inject(Router)

  @Input() display: string = '';
 
  goHome(){
    this.router.navigate(["/home"]);
  }
}
