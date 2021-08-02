import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { PessoaComponent } from './pessoa.component';
import { PessoaRoutingModule } from './pessoa.routing';
import { PessoaService } from './pessoa.service';

@NgModule({
  declarations: [PessoaComponent, ListarPessoasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PessoaRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [PessoaService],
})
export class PessoaModule {}
