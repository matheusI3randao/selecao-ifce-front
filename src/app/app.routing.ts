import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'cadastros/pessoa',
        loadChildren: () =>
          import('./pages/cadastros/pessoa/pessoa.module').then(m => m.PessoaModule),
      },
      {
        path: 'cadastros/habilidade',
        loadChildren: () =>
          import('./pages/cadastros/habilidade/habilidade.module').then(m => m.HabilidadeModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
