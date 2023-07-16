import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBookComponent } from './final-book.component';

describe('FinalBookComponent', () => {
  let component: FinalBookComponent;
  let fixture: ComponentFixture<FinalBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalBookComponent]
    });
    fixture = TestBed.createComponent(FinalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
