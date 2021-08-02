import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntdModule } from './../antd.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { MensageiroService } from './services/mensageiro.service';

@NgModule({
  declarations: [CpfPipe, ErrorMessageComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AntdModule],
  exports: [CpfPipe, ErrorMessageComponent, AntdModule],
  providers: [MensageiroService],
})
export class SharedModule {}
