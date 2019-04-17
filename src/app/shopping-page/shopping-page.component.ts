import { Component, OnInit } from '@angular/core';

import { StatusService } from '../status.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  constructor(
    public appStatus: StatusService
  ) { }

  ngOnInit() {
  }

  selectCategory(sCategoryName: string) {
    this.appStatus.setStatus('currentCategory', sCategoryName);
  }

  selectSubcategory(sSubcategoryName: string) {
    this.appStatus.setStatus('currentSubcategory', sSubcategoryName);
  }

}
