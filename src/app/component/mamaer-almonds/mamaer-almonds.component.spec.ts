import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamaerAlmondsComponent } from './mamaer-almonds.component';

describe('MamaerAlmondsComponent', () => {
  let component: MamaerAlmondsComponent;
  let fixture: ComponentFixture<MamaerAlmondsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MamaerAlmondsComponent]
    });
    fixture = TestBed.createComponent(MamaerAlmondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
