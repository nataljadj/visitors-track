import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { VisitorListService } from './visitor-list.service';

const MODULE_NAME: string = 'visitor-list';

@Component({
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
  providers:[VisitorListService]
})

export class VisitorListComponent {

  @Input() public searchWord;
  public tabName:string = 'Recent Patients';
  // list of or patients. Grab it from patientListService
  public visitorsListData;
  // single patient data.
  public recentPatientData;

  public newFormModel;
  public newPatientData;
  public detailsModel;

  constructor(
    // private _sharedService:SharedService,
    private _router: Router,
    private visitorService:VisitorListService
  ) {
    // this.searchWord = _sharedService.getData();
    // _sharedService.registerObserverCallback(() => this.updateSearchWord());
  }

  // fetch patient list from service when component has init
  ngOnInit(){
    this.getAllVisitorsData();
  }

  updateSearchWord() {
    // this.searchWord = this._sharedService.getData();
    this.tabName = 'Patients Result';
  }

  /**
   * getAllPatientsData - get all patients data
   *
   * @return {void}
   */
  private getAllVisitorsData():void {
     this.visitorService.fetchAllPAtients()
      .subscribe(
        res => {this.visitorsListData = res},
        err => console.log(err)
      );
  }

  private setChoosenPatientData(visitorData) {
    this.recentPatientData = visitorData;
  }

  set pipedPatientsData(filteredPatientsData) {
    this.recentPatientData = filteredPatientsData[0];
  }

}
