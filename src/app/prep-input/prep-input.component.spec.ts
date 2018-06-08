import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepInputComponent } from './prep-input.component';

describe('PrepInputComponent', () => {
  let component: PrepInputComponent;
  let fixture: ComponentFixture<PrepInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
