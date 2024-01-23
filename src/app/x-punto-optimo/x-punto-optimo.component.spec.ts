import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPuntoOptimoComponent } from './x-punto-optimo.component';

describe('XPuntoOptimoComponent', () => {
  let component: XPuntoOptimoComponent;
  let fixture: ComponentFixture<XPuntoOptimoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XPuntoOptimoComponent]
    });
    fixture = TestBed.createComponent(XPuntoOptimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
