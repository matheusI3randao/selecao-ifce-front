import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MensageiroService } from 'src/app/shared/services/mensageiro.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ValidatorsUtils } from 'src/app/shared/utils/validators';
import { HabilidadeService } from './habilidade.service';
import HabilidadeDTO from './models/habilidade-dto.interface';

@Component({
  selector: 'app-habilidade',
  templateUrl: './habilidade.component.html',
  styleUrls: ['./habilidade.component.scss'],
})
export class HabilidadeComponent implements OnInit {
  id: number;
  formHabilidade: FormGroup;

  habilidadeInput: HabilidadeDTO;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private mensageiro: MensageiroService,
    private sharedService: SharedService,
    private habilidadeService: HabilidadeService,
  ) { }

  async save() {
    ValidatorsUtils.validarCampos(this.formHabilidade);

    if (this.formHabilidade.invalid) {
      this.mensageiro.aviso('Preencha todos os campos obrigatórios!');
      return;
    }

    this.habilidadeInput = {
      id: this.id,
      descricao: this.formHabilidade.controls.descricao.value.toUpperCase(),
    };

    if (this.id) {
      await this.habilidadeService.update(this.habilidadeInput);
    } else {
      await this.habilidadeService.save(this.habilidadeInput);
    }

    this.mensageiro.sucesso(`Habilidade ${this.id ? 'atualizada' : 'atualizada'} com sucesso!`);
    this.router.navigate(['cadastros/habilidade']);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(async params => {
      this.id = params.id;

      if (this.id) {
        this.sharedService.mostrarLoader();
        this.habilidadeService.findById(this.id).subscribe(
          res => this.formHabilidade.patchValue(res),
          error => this.mensageiro.processarErroBack(error),
          () => this.sharedService.esconderLoader(),
        );
      }
    });

    this.formHabilidade = this.formBuilder.group({
      descricao: ['', [Validators.required, ValidatorsUtils.noWhitespaceValidator]],
    });
  }
}
