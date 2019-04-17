import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DataService } from '../data.service';
import { Category } from '../categories';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  arCategories: Category[];

  @Output() SelectCategory = new EventEmitter<string>();
  @Output() SelectSubcategory = new EventEmitter<string>();

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.arCategories = this.dataService.getCategories();
  }

  /**
   * rubric27
   * Clicking on a subcategory should change the name of the selected category in the controls bar
   */
  selectedSubcategory(sSubcategory: string) {
    this.SelectSubcategory.emit(sSubcategory);
  }

}
