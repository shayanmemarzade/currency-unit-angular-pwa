import { Component, OnInit } from '@angular/core';
import data from '../../assets/currencies.json'
import { CurrencyConvertorService } from './services/currency-convertor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.scss']
})
export class CurrencyConvertorComponent implements OnInit {
  currencyForm: FormGroup;
  currenciesList = data;
  exchange_rates: number;
  constructor(private currencyConvertorService: CurrencyConvertorService,
    private fb: FormBuilder,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.currencyForm = this.fb.group({
      baseAmount: [null, [Validators.required]],
      baseCurrency: [null, Validators.required],
      targetAmount: [null, Validators.required],
      targetCurrency: [null, Validators.required]
    });

    this.currencyForm.controls['baseAmount'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(async () => {
      this.changeValue('targetAmount')
    });
    this.currencyForm.controls['baseCurrency'].valueChanges.subscribe(async () => {
      this.changeValue('baseAmount')
    });
    this.currencyForm.controls['targetAmount'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(async () => {
      this.changeValue('baseAmount')
    });
    this.currencyForm.controls['targetCurrency'].valueChanges.subscribe(async () => {
      this.changeValue('targetAmount')
    });

  }
  async changeValue(fieldToChange: any) {
    let baseAmount = this.currencyForm.controls['baseAmount'].value;
    let baseCurrency = this.currencyForm.controls['baseCurrency'].value;
    let targetAmount = this.currencyForm.controls['targetAmount'].value;
    let targetCurrency = this.currencyForm.controls['targetCurrency'].value;

    if (baseCurrency && targetCurrency) {
      let res: any = await this.getConvertionRate(baseCurrency, targetCurrency);
      if (fieldToChange == 'baseAmount') {
        if (res) {
          let targetValue = (targetAmount / res.exchange_rates[targetCurrency]).toFixed(2);
          this.currencyForm.controls['baseAmount'].setValue(targetValue, { emitEvent: false })
        }
      } else {
        if (res) {
          let targetValue = (baseAmount * res.exchange_rates[targetCurrency]).toFixed(2);
          this.currencyForm.controls['targetAmount'].setValue(targetValue, { emitEvent: false })
        }
      }

    }


  }
  async getConvertionRate(base: string, target: string) {
    return new Promise((resolve, reject) => {
      this.currencyConvertorService.getConvertionRate(base, target).subscribe((response) => {
        resolve(response)
      }, (error) => {
        this.toastr.error('Error happened', 'Please try again later');
        reject(error)
        console.log(error)
      })
    })
  }

  replaceMoneySign(val: string) {
    if (val == 'EUR') return '€';
    else if (val == 'TRY') return '₺';
    else return val;
  }

  beautifyAmount(val: string) {
    return Number(val).toFixed(2)
  }
}
