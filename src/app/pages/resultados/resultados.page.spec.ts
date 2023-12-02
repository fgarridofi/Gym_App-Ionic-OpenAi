import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResultadosPage } from './resultados.page';

describe('ResultadosPage', () => {
  let component: ResultadosPage;
  let fixture: ComponentFixture<ResultadosPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ResultadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
