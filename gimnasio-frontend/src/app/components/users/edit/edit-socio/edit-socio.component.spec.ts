import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocioComponent } from './edit-socio.component';

describe('EditSocioComponent', () => {
  let component: EditSocioComponent;
  let fixture: ComponentFixture<EditSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSocioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
