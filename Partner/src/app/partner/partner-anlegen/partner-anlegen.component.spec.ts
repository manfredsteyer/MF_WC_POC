import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAnlegenComponent } from './partner-anlegen.component';

describe('PartnerAnlegenComponent', () => {
  let component: PartnerAnlegenComponent;
  let fixture: ComponentFixture<PartnerAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAnlegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
