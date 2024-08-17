import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxnutsComponent } from './foxnuts.component';

describe('FoxnutsComponent', () => {
  let component: FoxnutsComponent;
  let fixture: ComponentFixture<FoxnutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoxnutsComponent]
    });
    fixture = TestBed.createComponent(FoxnutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
