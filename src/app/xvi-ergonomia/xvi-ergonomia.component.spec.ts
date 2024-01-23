import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XviErgonomiaComponent } from './xvi-ergonomia.component';

describe('XviErgonomiaComponent', () => {
  let component: XviErgonomiaComponent;
  let fixture: ComponentFixture<XviErgonomiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XviErgonomiaComponent]
    });
    fixture = TestBed.createComponent(XviErgonomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
