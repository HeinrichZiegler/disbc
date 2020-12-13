import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmasComponent } from './xmas.component';

describe('XmasComponent', () => {
  let component: XmasComponent;
  let fixture: ComponentFixture<XmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
