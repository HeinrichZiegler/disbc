import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMediaComponent } from './about-media.component';

describe('AboutMediaComponent', () => {
  let component: AboutMediaComponent;
  let fixture: ComponentFixture<AboutMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
