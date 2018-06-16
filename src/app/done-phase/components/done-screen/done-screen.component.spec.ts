import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneScreenComponent } from './done-screen.component';

describe('DoneScreenComponent', () => {
  let component: DoneScreenComponent;
  let fixture: ComponentFixture<DoneScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
