import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakegameComponent } from './makegame.component';

describe('MakegameComponent', () => {
  let component: MakegameComponent;
  let fixture: ComponentFixture<MakegameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakegameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
