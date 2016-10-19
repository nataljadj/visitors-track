import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class DashboardService {
    private DASHBOARD_URL = '../../assets/mock-data/routes_data.json';
    private liveUpdate;

  constructor(private http:Http) {
  }

  getDashboardItems() {
    return this.http.get(this.DASHBOARD_URL)
        .map(res => res.json())
        .catch(this.handleError);
  }

  liveDataUpdate(items: Array[]) {
    return this.http.get(items.liveUpdate)
               .map((res: Object) => new Object({
                 label : items.label,
                 count : res.count
               }));
  }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
