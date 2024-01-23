import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IxBalanceLineaComponent } from './ix-balance-linea.component';

describe('IxBalanceLineaComponent', () => {
  let component: IxBalanceLineaComponent;
  let fixture: ComponentFixture<IxBalanceLineaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IxBalanceLineaComponent]
    });
    fixture = TestBed.createComponent(IxBalanceLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
