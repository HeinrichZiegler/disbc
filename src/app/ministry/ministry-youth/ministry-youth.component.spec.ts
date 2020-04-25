import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryYouthComponent } from './ministry-youth.component';

describe('MinistryYouthComponent', () => {
  let component: MinistryYouthComponent;
  let fixture: ComponentFixture<MinistryYouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryYouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryYouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
