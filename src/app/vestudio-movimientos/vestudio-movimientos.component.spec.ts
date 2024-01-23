import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestudioMovimientosComponent } from './vestudio-movimientos.component';

describe('VestudioMovimientosComponent', () => {
  let component: VestudioMovimientosComponent;
  let fixture: ComponentFixture<VestudioMovimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VestudioMovimientosComponent]
    });
    fixture = TestBed.createComponent(VestudioMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
