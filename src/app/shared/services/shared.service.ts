import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public loader = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  public mostrarLoader() {
    this.loader.next(true);
  }

  public esconderLoader() {
    this.loader.next(false);
  }

  // async consultarCEP(cep: string): Promise<ViaCepModel> {
  //   return this.http.get<ViaCepModel>(`http://viacep.com.br/ws/${cep}/json/`).toPromise();
  // }
}
