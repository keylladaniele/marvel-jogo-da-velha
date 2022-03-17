import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaPersonagemComponent } from './escolha-personagem.component';

describe('EscolhaPersonagemComponent', () => {
  let component: EscolhaPersonagemComponent;
  let fixture: ComponentFixture<EscolhaPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaPersonagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
