import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSignal } from './calc-signal';

describe('CalcSignal', () => {
  let component: CalcSignal;
  let fixture: ComponentFixture<CalcSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
