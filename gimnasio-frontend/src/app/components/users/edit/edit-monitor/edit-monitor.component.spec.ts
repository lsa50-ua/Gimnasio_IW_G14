import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonitorComponent } from './edit-monitor.component';

describe('EditMonitorComponent', () => {
  let component: EditMonitorComponent;
  let fixture: ComponentFixture<EditMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
