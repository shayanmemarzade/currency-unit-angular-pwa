import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-length-convertor',
  templateUrl: './length-convertor.component.html',
  styleUrls: ['./length-convertor.component.scss']
})
export class LengthConvertorComponent implements OnInit {
  lengthForm: FormGroup;
  exchange_rates: number;
  constructor(
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.lengthForm = this.fb.group({
      meter: [null],
      yard: [null],
      inch: [null],
    });

    this.lengthForm.controls['meter'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(async () => {
      this.changeValue('meter')
    })
    this.lengthForm.controls['yard'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(async () => {
      this.changeValue('yard')
    });
    this.lengthForm.controls['inch'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(async () => {
      this.changeValue('inch')
    });


  }
  async changeValue(changedValue: any) {
    let meter = this.lengthForm.controls['meter'].value;
    let yard = this.lengthForm.controls['yard'].value;
    let inch = this.lengthForm.controls['inch'].value;

    if (changedValue == 'meter') {
      let targetInchValue = (meter * 39.370).toFixed(2);
      let targetyardValue = (meter * 1.0936).toFixed(2);
      this.lengthForm.controls['yard'].setValue(targetyardValue, { emitEvent: false })
      this.lengthForm.controls['inch'].setValue(targetInchValue, { emitEvent: false })
    }
    if (changedValue == 'yard') {
      let targetmeterValue = (yard / 1.0936).toFixed(2);
      let targetInchValue = (yard * 36).toFixed(2);
      this.lengthForm.controls['meter'].setValue(targetmeterValue, { emitEvent: false })
      this.lengthForm.controls['inch'].setValue(targetInchValue, { emitEvent: false })
    }
    if (changedValue == 'inch') {
      let targetmeterValue = (inch / 39.370).toFixed(2);
      let targetyardValue = (inch * 0.027778).toFixed(2);
      this.lengthForm.controls['meter'].setValue(targetmeterValue, { emitEvent: false })
      this.lengthForm.controls['yard'].setValue(targetyardValue, { emitEvent: false })
    }

  }
  beautifyNumber(val: number) {
    return Math.round(val * 100) / 100;
  }
}

