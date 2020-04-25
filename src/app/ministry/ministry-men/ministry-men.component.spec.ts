import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryMenComponent } from './ministry-men.component';

describe('MinistryMenComponent', () => {
  let component: MinistryMenComponent;
  let fixture: ComponentFixture<MinistryMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
