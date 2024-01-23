import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XivAdministracionMetodosComponent } from './xiv-administracion-metodos.component';

describe('XivAdministracionMetodosComponent', () => {
  let component: XivAdministracionMetodosComponent;
  let fixture: ComponentFixture<XivAdministracionMetodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XivAdministracionMetodosComponent]
    });
    fixture = TestBed.createComponent(XivAdministracionMetodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
