import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPessoasComponent } from './listar-pessoas.component';

describe('ListarPessoasComponent', () => {
  let component: ListarPessoasComponent;
  let fixture: ComponentFixture<ListarPessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
