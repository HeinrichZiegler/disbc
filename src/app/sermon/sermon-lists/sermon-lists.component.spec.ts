import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonListsComponent } from './sermon-lists.component';

describe('SermonListsComponent', () => {
  let component: SermonListsComponent;
  let fixture: ComponentFixture<SermonListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SermonListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
