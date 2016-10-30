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
  public visitorsListData;
  // single patient data.
  public recentVisitorData;

  public newFormModel;
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

  private getAllVisitorsData():void {
     this.visitorService.fetchAllPAtients()
      .subscribe(
        res => {this.visitorsListData = res},
        err => console.log(err)
      );
  }

  private setChoosenVisitorData(visitorData) {
    this.recentVisitorData = visitorData;
  }

  set pipedVisitorsData(filteredPatientsData) {
    this.recentVisitorData = filteredPatientsData[0];
  }

}
