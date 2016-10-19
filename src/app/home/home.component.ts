import { Component } from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'home',
  providers: [
      DashboardService
  ],
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class Home {
 public items;
  public counts;

  constructor(private _dashboardService: DashboardService) {
    this.items = [];
    this.counts = [];
  }

  // just for testing, implement function, that will fetch data from server, when it will be ready
  update() {
    this.items.forEach(item =>
     item.count ++
    )
  }

  ngOnInit() {
      this._dashboardService.getDashboardItems()
          .subscribe(res => {
              this.items = res.homeNav;
          });

      setInterval(() => this.update(), 10000);
  }
}
