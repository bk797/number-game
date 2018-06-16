import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayInputComponent } from './play-input.component';

describe('PlayInputComponent', () => {
  let component: PlayInputComponent;
  let fixture: ComponentFixture<PlayInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
