import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import IErro from '../models/erro.interface';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class MensageiroService {
  constructor(private sharedService: SharedService, private notification: NzNotificationService) { }

  public erro(texto: string, titulo?: string): void {
    this.sharedService.esconderLoader();
    this.notification.error(titulo ? titulo : 'ERRO!', texto, {
      nzCloseIcon: 'close',
      nzPauseOnHover: true,
    });
  }

  public aviso(texto: string, titulo?: string): void {
    this.notification.warning(titulo ? titulo : 'ATENÇÃO!', texto, {
      nzCloseIcon: 'close',
      nzPauseOnHover: true,
    });
  }

  public info(texto: string, titulo?: string): void {
    this.notification.info(titulo ? titulo : 'INFORMAÇÃO!', texto, {
      nzCloseIcon: 'close',
      nzPauseOnHover: true,
    });
  }

  public sucesso(texto: string, titulo?: string): void {
    this.notification.success(titulo ? titulo : 'SUCESSO!', texto, {
      nzCloseIcon: 'close',
      nzPauseOnHover: true,
    });
  }

  public processarErroBack(err: HttpErrorResponse): void {
    if (err.status === 0) {
      this.erro('Servidor fora do ar!');
      return;
    }

    const erro = err?.error as IErro;

    this.erro(erro.message);
  }
}
