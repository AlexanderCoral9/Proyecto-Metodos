import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiiDistribucionPlantaComponent } from './xii-distribucion-planta.component';

describe('XiiDistribucionPlantaComponent', () => {
  let component: XiiDistribucionPlantaComponent;
  let fixture: ComponentFixture<XiiDistribucionPlantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XiiDistribucionPlantaComponent]
    });
    fixture = TestBed.createComponent(XiiDistribucionPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
