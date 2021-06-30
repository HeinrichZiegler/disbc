import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGroupComponent } from './live-group.component';

describe('LiveGroupComponent', () => {
  let component: LiveGroupComponent;
  let fixture: ComponentFixture<LiveGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
