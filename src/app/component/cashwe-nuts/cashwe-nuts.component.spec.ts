import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashweNutsComponent } from './cashwe-nuts.component';

describe('CashweNutsComponent', () => {
  let component: CashweNutsComponent;
  let fixture: ComponentFixture<CashweNutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashweNutsComponent]
    });
    fixture = TestBed.createComponent(CashweNutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
