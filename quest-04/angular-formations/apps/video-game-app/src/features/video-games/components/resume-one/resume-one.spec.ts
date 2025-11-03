import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeOne } from './resume-one';

describe('ResumeOne', () => {
  let component: ResumeOne;
  let fixture: ComponentFixture<ResumeOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
