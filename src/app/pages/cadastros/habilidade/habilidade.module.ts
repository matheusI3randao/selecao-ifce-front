import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HabilidadeComponent } from './habilidade.component';
import { HabilidadeRoutingModule } from './habilidade.routing';
import { HabilidadeService } from './habilidade.service';
import { ListarHabilidadeComponent } from './listar-habilidade/listar-habilidade.component';

@NgModule({
  declarations: [HabilidadeComponent, ListarHabilidadeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, HabilidadeRoutingModule],
  providers: [HabilidadeService],
})
export class HabilidadeModule {}
