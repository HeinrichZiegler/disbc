import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIonaComponent } from './about-iona.component';

describe('AboutIonaComponent', () => {
  let component: AboutIonaComponent;
  let fixture: ComponentFixture<AboutIonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
