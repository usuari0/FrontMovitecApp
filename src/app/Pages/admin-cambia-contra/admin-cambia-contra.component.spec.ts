import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCambiaContraComponent } from './admin-cambia-contra.component';

describe('AdminCambiaContraComponent', () => {
  let component: AdminCambiaContraComponent;
  let fixture: ComponentFixture<AdminCambiaContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCambiaContraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCambiaContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
