import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import HabilidadeDTO from './models/habilidade-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class HabilidadeService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/pessoas-mock';

  findAll(descricao?: string): Observable<HabilidadeDTO[]> {
    const url = descricao ? `${this.baseUrl}?descricao=${descricao}` : this.baseUrl;
    return this.http.get<HabilidadeDTO[]>(url);
  }

  findById(id: any): Observable<HabilidadeDTO> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<HabilidadeDTO>(url);
  }

  save(habilidade: HabilidadeDTO): Promise<HabilidadeDTO> {
    return this.http.post<HabilidadeDTO>(this.baseUrl, habilidade).toPromise();
  }

  update(habilidade: HabilidadeDTO): Promise<HabilidadeDTO> {
    const url = `${this.baseUrl}/${habilidade.id}`;
    return this.http.put<HabilidadeDTO>(url, habilidade).toPromise();
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
