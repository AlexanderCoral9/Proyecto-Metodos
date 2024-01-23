import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XvCondicionesLaboralesComponent } from './xv-condiciones-laborales.component';

describe('XvCondicionesLaboralesComponent', () => {
  let component: XvCondicionesLaboralesComponent;
  let fixture: ComponentFixture<XvCondicionesLaboralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XvCondicionesLaboralesComponent]
    });
    fixture = TestBed.createComponent(XvCondicionesLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
