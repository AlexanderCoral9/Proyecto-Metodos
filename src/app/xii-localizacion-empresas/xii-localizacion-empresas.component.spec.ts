import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiiLocalizacionEmpresasComponent } from './xii-localizacion-empresas.component';

describe('XiiLocalizacionEmpresasComponent', () => {
  let component: XiiLocalizacionEmpresasComponent;
  let fixture: ComponentFixture<XiiLocalizacionEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XiiLocalizacionEmpresasComponent]
    });
    fixture = TestBed.createComponent(XiiLocalizacionEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
