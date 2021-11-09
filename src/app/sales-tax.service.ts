import { Injectable } from '@angular/core';

import { TaxRateService } from './tax-rate.service';

@Injectable()
export class SalesTaxService {
  constructor(private rateService: TaxRateService) { }

  getVAT(value: string | number) {
    const amount = (typeof value === 'string') ?
      parseFloat(value) : value;
    return (amount || 0) * this.rateService.getRate('VAT');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/