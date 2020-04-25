import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPastorComponent } from './about-pastor.component';

describe('AboutPastorComponent', () => {
  let component: AboutPastorComponent;
  let fixture: ComponentFixture<AboutPastorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPastorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPastorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
