import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibidoComponent } from './prohibido.component';

describe('ProhibidoComponent', () => {
  let component: ProhibidoComponent;
  let fixture: ComponentFixture<ProhibidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProhibidoComponent]
    });
    fixture = TestBed.createComponent(ProhibidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
