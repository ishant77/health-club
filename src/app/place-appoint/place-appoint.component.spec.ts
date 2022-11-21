import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAppointComponent } from './place-appoint.component';

describe('PlaceAppointComponent', () => {
  let component: PlaceAppointComponent;
  let fixture: ComponentFixture<PlaceAppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceAppointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
