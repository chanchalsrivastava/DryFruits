import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffedComponent } from './stuffed.component';

describe('StuffedComponent', () => {
  let component: StuffedComponent;
  let fixture: ComponentFixture<StuffedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuffedComponent]
    });
    fixture = TestBed.createComponent(StuffedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
