import { Component, OnInit } from '@angular/core';
import HabilidadeDTO from '../models/habilidade-dto.interface';
import { SharedService } from 'src/app/shared/services/shared.service';
import { HabilidadeService } from '../habilidade.service';
import { MensageiroService } from 'src/app/shared/services/mensageiro.service';

@Component({
  selector: 'app-listar-habilidade',
  templateUrl: './listar-habilidade.component.html',
  styleUrls: ['./listar-habilidade.component.scss'],
})
export class ListarHabilidadeComponent implements OnInit {
  descricao: string;

  habilidades: HabilidadeDTO[];

  constructor(
    private sharedService: SharedService,
    private mensageiro: MensageiroService,
    private habilidadeService: HabilidadeService,
  ) {}

  search() {
    this.sharedService.mostrarLoader();

    this.habilidadeService.findAll(this.descricao).subscribe(
      res => {
        if (res?.length === 0) {
          this.mensageiro.info('Não foram encontrados registros!');
        }
        this.habilidades = res;
      },
      error => this.mensageiro.erro(error),
      () => this.sharedService.esconderLoader(),
    );
  }

  clear() {
    this.descricao = null;
    this.habilidades = [];
  }

  delete(habilidade: HabilidadeDTO) {
    this.sharedService.mostrarLoader();

    this.habilidadeService.delete(habilidade.id).subscribe(
      () => {
        this.mensageiro.sucesso(`Habilidade ${habilidade.descricao} deletada com sucesso!`);
        this.search();
      },
      error => this.mensageiro.erro(error),
      () => this.sharedService.esconderLoader(),
    );
  }

  ngOnInit(): void {
    this.search();
  }
}
