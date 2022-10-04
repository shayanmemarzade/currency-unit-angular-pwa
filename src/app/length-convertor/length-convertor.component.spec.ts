import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthConvertorComponent } from './length-convertor.component';

describe('LengthConvertorComponent', () => {
  let component: LengthConvertorComponent;
  let fixture: ComponentFixture<LengthConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LengthConvertorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LengthConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
