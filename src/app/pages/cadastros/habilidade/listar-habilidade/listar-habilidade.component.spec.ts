import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHabilidadeComponent } from './listar-habilidade.component';

describe('ListarHabilidadeComponent', () => {
  let component: ListarHabilidadeComponent;
  let fixture: ComponentFixture<ListarHabilidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHabilidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
