import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassnplayscreenComponent } from './passnplayscreen.component';

describe('PassnplayscreenComponent', () => {
  let component: PassnplayscreenComponent;
  let fixture: ComponentFixture<PassnplayscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassnplayscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassnplayscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
