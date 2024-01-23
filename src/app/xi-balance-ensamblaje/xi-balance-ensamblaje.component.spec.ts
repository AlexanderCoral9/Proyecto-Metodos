import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiBalanceEnsamblajeComponent } from './xi-balance-ensamblaje.component';

describe('XiBalanceEnsamblajeComponent', () => {
  let component: XiBalanceEnsamblajeComponent;
  let fixture: ComponentFixture<XiBalanceEnsamblajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XiBalanceEnsamblajeComponent]
    });
    fixture = TestBed.createComponent(XiBalanceEnsamblajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
