import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrySundayComponent } from './ministry-sunday.component';

describe('MinistrySundayComponent', () => {
  let component: MinistrySundayComponent;
  let fixture: ComponentFixture<MinistrySundayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistrySundayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistrySundayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
