import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViiHerramientasReactivasComponent } from './vii-herramientas-reactivas.component';

describe('ViiHerramientasReactivasComponent', () => {
  let component: ViiHerramientasReactivasComponent;
  let fixture: ComponentFixture<ViiHerramientasReactivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViiHerramientasReactivasComponent]
    });
    fixture = TestBed.createComponent(ViiHerramientasReactivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
