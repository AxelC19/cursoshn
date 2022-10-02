import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiInstrComponent } from './edi-instr.component';

describe('EdiInstrComponent', () => {
  let component: EdiInstrComponent;
  let fixture: ComponentFixture<EdiInstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiInstrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiInstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
