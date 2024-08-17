import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPageComponent } from './opt-page.component';

describe('OptPageComponent', () => {
  let component: OptPageComponent;
  let fixture: ComponentFixture<OptPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptPageComponent]
    });
    fixture = TestBed.createComponent(OptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
