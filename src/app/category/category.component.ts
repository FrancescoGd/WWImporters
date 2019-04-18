import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { DataService } from '../data.service';
import { Category } from '../categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnChanges {
  rcCategory: Category;
  @Input() selectedCategory: string;
  @Output() SelectSubcategory = new EventEmitter<string>();

  constructor(
    private dataService: DataService
  ) { }

  ngOnChanges() {
    this.rcCategory = this.dataService.getCategoryByName(this.selectedCategory);
   }

   selectedSubcategory(sSubcategory: string) {
    this.SelectSubcategory.emit(sSubcategory);
  }

}
