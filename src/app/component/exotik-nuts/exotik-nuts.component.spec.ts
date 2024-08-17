import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExotikNutsComponent } from './exotik-nuts.component';

describe('ExotikNutsComponent', () => {
  let component: ExotikNutsComponent;
  let fixture: ComponentFixture<ExotikNutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExotikNutsComponent]
    });
    fixture = TestBed.createComponent(ExotikNutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
