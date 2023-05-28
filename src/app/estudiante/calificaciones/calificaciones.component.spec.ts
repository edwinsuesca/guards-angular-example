import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesComponent } from './calificaciones.component';

describe('CalificacionesComponent', () => {
  let component: CalificacionesComponent;
  let fixture: ComponentFixture<CalificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalificacionesComponent]
    });
    fixture = TestBed.createComponent(CalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
