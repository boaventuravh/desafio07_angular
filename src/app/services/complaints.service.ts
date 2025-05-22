import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Chamado } from '../models/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  http = inject(HttpClient);
  

  constructor() { }

  getChamados(): Observable<Chamado[]>{
    return this.http.get<Chamado[]>("http://localhost:3001/complaints");
  }

  deleteChamado(id: number): Observable<Chamado>{
    return this.http.delete<Chamado>(`http://localhost:3001/complaints/${id}`);
  }
}
