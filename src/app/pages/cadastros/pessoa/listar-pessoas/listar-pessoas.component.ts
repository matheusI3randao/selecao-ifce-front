import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { PagePessoa } from '../models/page-pessoa.interface';
import { MensageiroService } from 'src/app/shared/services/mensageiro.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import IPessoaListagemDTO from '../models/pessoa-listagem-dto.interface';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss'],
})
export class ListarPessoasComponent implements OnInit {
  cpf: string;
  nome: string;

  page: PagePessoa;

  constructor(
    private sharedService: SharedService,
    private mensageiro: MensageiroService,
    private pessoaService: PessoaService,
  ) {}

  search() {
    this.sharedService.mostrarLoader();
    this.pessoaService.findAll(this.cpf, this.nome).subscribe(
      res => {
        if (res.content.length === 0) {
          this.mensageiro.info('Não foram encontrados registros!');
        }
        this.page = res;
      },
      error => this.mensageiro.erro(error),
      () => this.sharedService.esconderLoader(),
    );
  }

  delete(pessoa: IPessoaListagemDTO) {
    this.pessoaService.delete(pessoa.id).subscribe(
      () => {
        this.mensageiro.sucesso('Pessoa excluída com sucesso!');
        this.search();
      },
      error => this.mensageiro.erro(error),
      () => this.sharedService.esconderLoader(),
    );
  }

  clear() {
    this.cpf = null;
    this.nome = null;
    this.page = null;
  }

  ngOnInit(): void {
    this.search();
  }
}
