import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MusculacionPage } from './musculacion.page';

describe('MusculacionPage', () => {
  let component: MusculacionPage;
  let fixture: ComponentFixture<MusculacionPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(MusculacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
