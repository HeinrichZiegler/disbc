import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryWomenComponent } from './ministry-women.component';

describe('MinistryWomenComponent', () => {
  let component: MinistryWomenComponent;
  let fixture: ComponentFixture<MinistryWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
