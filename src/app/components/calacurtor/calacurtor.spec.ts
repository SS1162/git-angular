import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calacurtor } from './calacurtor';

describe('Calacurtor', () => {
  let component: Calacurtor;
  let fixture: ComponentFixture<Calacurtor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calacurtor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calacurtor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
