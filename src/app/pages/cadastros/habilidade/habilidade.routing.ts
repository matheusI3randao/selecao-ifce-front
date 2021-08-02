import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadeComponent } from './habilidade.component';
import { ListarHabilidadeComponent } from './listar-habilidade/listar-habilidade.component';

const routes: Routes = [
  {
    path: '',
    component: ListarHabilidadeComponent,
  },
  {
    path: 'novo',
    component: HabilidadeComponent,
  },
  {
    path: 'editar/:id',
    component: HabilidadeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadeRoutingModule {}
