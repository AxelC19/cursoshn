import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInstrComponent } from './agregar-instr.component';

describe('AgregarInstrComponent', () => {
  let component: AgregarInstrComponent;
  let fixture: ComponentFixture<AgregarInstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarInstrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarInstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
