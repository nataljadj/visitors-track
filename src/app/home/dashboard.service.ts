import { Injectable } from '@angular/core';
/* ------- !Angular 2 native components  ---------*/

import { UtilityService } from 'utilService';
/* ------- !Services  ---------*/

import { Config } from 'appConfig';
/* ------- !Config  ---------*/

@Injectable()
export class DashboardService {
  private liveUpdate;

  constructor(
    private utilityService: UtilityService,
    private config: Config) {
  }

  getDashboardItems() {
    return this.utilityService.generateGetHttp(this.config.getUrlsGroup().ROUTES_DATA_URL)
               .map((res: Object) => res.homeNav);
  }

  liveDataUpdate(items: Array[]) {
    return this.utilityService.generateGetHttp(items.liveUpdate)
               .map((res: Object) => new Object({
                 label : items.label,
                 count : res.count
               }));
  }
}
