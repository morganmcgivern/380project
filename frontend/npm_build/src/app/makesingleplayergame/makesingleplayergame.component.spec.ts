import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakesingleplayergameComponent } from './makesingleplayergame.component';

describe('MakesingleplayergameComponent', () => {
  let component: MakesingleplayergameComponent;
  let fixture: ComponentFixture<MakesingleplayergameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakesingleplayergameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakesingleplayergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
