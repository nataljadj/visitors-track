import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
/* ------- !Angular 2 native components  ---------*/

import { Config } from 'appConfig';

@Injectable()

export class VisitorListService {
  private savedPatientListPromise;
  private patientsListUrl: string = '../../../assets/mock-data/visitors-data.json';
  private cachedPatients:Array<any>;

  constructor(private http:Http){}

  fetchAllPAtients() {
    return this.http.get(this.patientsListUrl)
        .map(res => res.json())
        .catch(this.handleError);
  }
  // fill cached patient

  findOneFromCache(id){
    return this.cachedPatients ? this.cachedPatients.find(patient => patient.id == id) : null;
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
