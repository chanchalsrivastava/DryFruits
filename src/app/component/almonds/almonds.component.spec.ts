import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmondsComponent } from './almonds.component';

describe('AlmondsComponent', () => {
  let component: AlmondsComponent;
  let fixture: ComponentFixture<AlmondsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmondsComponent]
    });
    fixture = TestBed.createComponent(AlmondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
