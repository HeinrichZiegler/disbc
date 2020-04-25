import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDuttonComponent } from './about-dutton.component';

describe('AboutDuttonComponent', () => {
  let component: AboutDuttonComponent;
  let fixture: ComponentFixture<AboutDuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
