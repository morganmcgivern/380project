import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmakerComponent } from './setmaker.component';

describe('SetmakerComponent', () => {
  let component: SetmakerComponent;
  let fixture: ComponentFixture<SetmakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetmakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
