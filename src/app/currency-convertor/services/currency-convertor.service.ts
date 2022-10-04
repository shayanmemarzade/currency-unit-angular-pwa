import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConvertorService {
  abstractapiKey = environment.abstractapiKey;
  baseUrl = `https://exchange-rates.abstractapi.com/v1/live/?api_key=${this.abstractapiKey}`
  constructor(private http: HttpClient) { }
  getConvertionRate(base: string, target: string) {
    return this.http.get<any>(`${this.baseUrl}&base=${base}&target=${target}`);
  }
}
