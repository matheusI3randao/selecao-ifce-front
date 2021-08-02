import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagePessoa } from './models/page-pessoa.interface';
import IPessoaInputDTO from './models/pessoa-input-dto.interface';
import IPessoaOuputDTO from './models/pessoa-output-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor(private http: HttpClient) {}

  url = environment.url + 'pessoas';

  findAll(cpf?: string, nome?: string): Observable<PagePessoa> {
    let nUrl = `${this.url}?`;
    nUrl += cpf ? `cpf=${cpf}` : '';
    nUrl += nome ? `nome=${nome}` : '';

    return this.http.get<PagePessoa>(nUrl);
  }

  findById(id: number): Observable<IPessoaOuputDTO> {
    return this.http.get<IPessoaOuputDTO>(`${this.url}/${id}`);
  }

  save(pessoa: IPessoaInputDTO): Promise<IPessoaOuputDTO> {
    return this.http.post<IPessoaOuputDTO>(this.url, pessoa).toPromise();
  }

  update(pessoa: IPessoaInputDTO): Promise<IPessoaOuputDTO> {
    return this.http.put<IPessoaOuputDTO>(this.url, pessoa).toPromise();
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
