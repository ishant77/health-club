import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataserviceService } from '../service/dataservice.service';
import { ViewAppointComponent} from './view-appoint.component';



describe('ViewAppointComponent', () => {
  let component: ViewAppointComponent;
  let fixture: ComponentFixture<ViewAppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
