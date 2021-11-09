import { Injectable } from '@angular/core';

@Injectable()
export class TaxRateService {
  getRate(rateName: string) { return 0.10; } // 10% everywhere
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/