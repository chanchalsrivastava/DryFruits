import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoconutsComponent } from './coconuts.component';

describe('CoconutsComponent', () => {
  let component: CoconutsComponent;
  let fixture: ComponentFixture<CoconutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoconutsComponent]
    });
    fixture = TestBed.createComponent(CoconutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
