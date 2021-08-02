import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';

const routes: Routes = [
  {
    path: '',
    component: ListarPessoasComponent,
  },
  {
    path: 'novo',
    component: PessoaComponent,
  },
  {
    path: 'editar/:id',
    component: PessoaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaRoutingModule {}
