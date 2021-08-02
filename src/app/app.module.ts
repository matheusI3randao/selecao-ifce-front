import { registerLocaleData } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import br from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule, TemplateRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ptBR } from 'date-fns/locale';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { NzI18nService, NZ_DATE_LOCALE, NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AntdModule } from './antd.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { IconsProviderModule } from './icons-provider.module';
import { HomeComponent } from './layout/home/home.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SharedModule } from './shared/shared.module';
import { Interceptor } from './shared/services/interceptor.service';

registerLocaleData(br);

@NgModule({
  declarations: [AppComponent, HomeComponent, LoaderComponent],

  imports: [
    AntdModule,
    FormsModule,
    SharedModule,
    NzMenuModule,
    BrowserModule,
    NzLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    IconsProviderModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NzMessageService,
    { provide: NZ_DATE_LOCALE, useValue: ptBR },
    { provide: NZ_I18N, useValue: pt_BR },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private notification: NzNotificationService, private i18n: NzI18nService) {
    this.i18n.setDateLocale(ptBR);
  }

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }
}
