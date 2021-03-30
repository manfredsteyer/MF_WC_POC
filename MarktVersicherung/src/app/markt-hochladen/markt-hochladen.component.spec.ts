import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktHochladenComponent } from './markt-hochladen.component';

describe('MarktHochladenComponent', () => {
  let component: MarktHochladenComponent;
  let fixture: ComponentFixture<MarktHochladenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarktHochladenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktHochladenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
