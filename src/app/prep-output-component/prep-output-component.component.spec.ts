import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepOutputComponentComponent } from './prep-output-component.component';

describe('PrepOutputComponentComponent', () => {
  let component: PrepOutputComponentComponent;
  let fixture: ComponentFixture<PrepOutputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepOutputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepOutputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
