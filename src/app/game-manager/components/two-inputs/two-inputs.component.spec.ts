import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoInputsComponent } from './two-inputs.component';

describe('TwoInputsComponent', () => {
  let component: TwoInputsComponent;
  let fixture: ComponentFixture<TwoInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
