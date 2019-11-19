import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerbrowserComponent } from './serverbrowser.component';

describe('ServerbrowserComponent', () => {
  let component: ServerbrowserComponent;
  let fixture: ComponentFixture<ServerbrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerbrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerbrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
