import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensageiroService } from 'src/app/shared/services/mensageiro.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ValidatorsUtils } from 'src/app/shared/utils/validators';
import { EnumEscolaridade } from './models/escolaridade.enum';
import PessoaInputDTO from './models/pessoa-input-dto.interface';
import { PessoaService } from './pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Util } from 'src/app/shared/utils/utils';
import HabilidadeDTO from '../habilidade/models/habilidade-dto.interface';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
})
export class PessoaComponent implements OnInit {
  id: number;
  formPessoa: FormGroup;

  pessoaInput: PessoaInputDTO;

  lstEnumEscolaridade = EnumEscolaridade.descricoes();
  lstHabilidades: HabilidadeDTO[] = [
    { id: 1, descricao: 'JAVA' },
    { id: 2, descricao: 'ANGULAR' },
    { id: 3, descricao: 'REACT' },
    { id: 4, descricao: 'NODE' },
    { id: 5, descricao: 'SPRING BOOT' },
    { id: 6, descricao: 'HIBERNATE' },
    { id: 7, descricao: 'POSTGRES' },
  ];
  listOfSelectedValue = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private mensageiro: MensageiroService,
    private pessoaService: PessoaService,
  ) {}

  private prepareInput() {
    this.pessoaInput = {
      id: this.id,
      cpf: this.formPessoa.controls.cpf.value,
      nome: this.formPessoa.controls.nome.value,
      dataNascimento: this.formPessoa.controls.dataNascimento.value,
      email: this.formPessoa.controls.email?.value,
      escolaridade: this.formPessoa.controls.escolaridade.value,
      observacao: this.formPessoa.controls.observacao?.value,
      habilidades: this.listOfSelectedValue,
    };
  }

  async save() {
    ValidatorsUtils.validarCampos(this.formPessoa);

    if (this.formPessoa.invalid) {
      this.validarCpf();
      this.mensageiro.aviso('Preencha todos os campos obrigatórios!');
      return;
    }

    this.sharedService.mostrarLoader();
    this.prepareInput();

    try {
      if (this.id) {
        await this.pessoaService.update(this.pessoaInput);
      } else {
        await this.pessoaService.save(this.pessoaInput);
      }

      this.mensageiro.sucesso(`Pessoa ${this.id ? 'atualizada' : 'cadastrada'} com sucesso!`);
      this.router.navigate(['cadastros/pessoa']);
    } catch (error) {
      this.mensageiro.erro(error);
    }
  }

  validarCpf() {
    const cpf = this.formPessoa.controls.cpf.value;
    if (cpf && !Util.isCPFValido(cpf)) {
      this.formPessoa.controls.cpf.setErrors({ pattern: true });
    }
  }

  obterValorEnumEscolaridade(descricao: string) {
    return EnumEscolaridade.obterValor(descricao);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(async params => {
      this.id = params.id;

      if (this.id) {
        this.sharedService.mostrarLoader();
        this.pessoaService.findById(this.id).subscribe(
          res => {
            this.formPessoa.patchValue(res);
            this.listOfSelectedValue = [];
            res.habilidades.forEach(i => {
              this.listOfSelectedValue.push(this.lstHabilidades.find(j => j.id === i.id));
            });
          },
          error => this.mensageiro.erro(error),
          () => this.sharedService.esconderLoader(),
        );
      }
    });

    this.formPessoa = this.formBuilder.group({
      cpf: ['', Validators.required],
      nome: ['', [Validators.required, ValidatorsUtils.noWhitespaceValidator]],
      email: ['', Validators.email],
      escolaridade: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      observacao: [''],
    });
  }
}
