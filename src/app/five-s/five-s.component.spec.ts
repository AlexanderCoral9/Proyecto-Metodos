import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveSComponent } from './five-s.component';

describe('FiveSComponent', () => {
  let component: FiveSComponent;
  let fixture: ComponentFixture<FiveSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveSComponent]
    });
    fixture = TestBed.createComponent(FiveSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
