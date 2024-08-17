import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalnutsComponent } from './walnuts.component';

describe('WalnutsComponent', () => {
  let component: WalnutsComponent;
  let fixture: ComponentFixture<WalnutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalnutsComponent]
    });
    fixture = TestBed.createComponent(WalnutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
