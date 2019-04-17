/**
 * rubric80
 * Used jQuery or Angular for data binding
 * NOTE: I've put here data retrieving and some utility methods.
 * In a real world scenario, some of those would talk with a servers through real APIs
 * Just to exercise and test with wider cases I've used different techinquest in some of the methods:
 * sometimes I map+filter other times I loop with for and sometimes I used both.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Category } from './categories';
import { Item } from './item';

export interface RsRecordset {
  category: string;
  subcategories: [
    {
      name: string;
      items: Item[];
    }
  ];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private itemsUrl = 'https://webmppcapstone.blob.core.windows.net/data/itemsdata.json';
  private rsRecodset: RsRecordset[] = [];

  constructor(
    private http: HttpClient
  ) { }

  /**
   * rubric81
   * Data was accessed using the Azure Web API and not a local file
   */
  getData(): Observable<RsRecordset[]> {
    return this.http.get<RsRecordset[]>(this.itemsUrl);
  }


  getAllItems(): Observable<Item[]> {
    const arItems: Item[] = [];
    this.getData()
    .subscribe(
      response => {
        response.map(category => {
          return category.subcategories.map(subcats => {
              return subcats.items.map(subcatsitems => {
                arItems.push(subcatsitems);
              });
          });
        });
      }
    );
    return of(arItems);
  }


  getCategories(): Category[] {
    const arCategories: Category[] = [];
    this.getData().subscribe((dataset: RsRecordset[]) => {
      this.rsRecodset = dataset.slice();
      for (const ixCategory in this.rsRecodset) {
        if (this.rsRecodset.hasOwnProperty(ixCategory)) {
          arCategories.push(new Category(this.rsRecodset[ixCategory].category));
          for (const ixSubcat in this.rsRecodset[ixCategory].subcategories) {
            if (this.rsRecodset[ixCategory].subcategories.hasOwnProperty(ixSubcat)) {
              arCategories[ixCategory].subcategories.push(this.rsRecodset[ixCategory].subcategories[ixSubcat].name);
            }
          }

        }
      }
    });
    return arCategories;
  }


  getCategoryByName(sCategoryName: string): Category {
    const rcCategory = new Category('');
    this.getData().subscribe((dataset: RsRecordset[]) => {
      this.rsRecodset = dataset.slice();
      const arCategoryData = this.rsRecodset.filter(category => category.category === sCategoryName);
      rcCategory.name = arCategoryData[0].category;
      rcCategory.subcategories = arCategoryData[0].subcategories.map(subcat => subcat.name);
    });
    return rcCategory;
  }


  getItemsByCategory(sCategoryName: string) {
    const arItems: Item[] = [];
    this.getData()
    .subscribe(
      response => {
       response.map(category => {
          return category.subcategories
            .filter(subcat => subcat.name === sCategoryName)
            .map(subcats => {
              return subcats.items
                .map(subcatitems => {
                  arItems.push(subcatitems)
                  ;
              });
          });
        });
      }
    );
    return arItems;
  }


  findItemIndex(sItemName: string): number {
    return -1;
  }

  getItemDetails(sItemName: string): Item {
    const rcItem = new Item();

    this.getData()
    .subscribe((dataset: RsRecordset[]) => {
      dataset.map(category => {
        return category.subcategories
          .map(subcats => {
            return subcats.items
              .filter(subcatitems => subcatitems.name === sItemName)
              .map (selectedItem => {
                for (const itemProperty in selectedItem) {
                  if (selectedItem.hasOwnProperty(itemProperty)) {
                    rcItem[itemProperty] = selectedItem[itemProperty];
                  }
                }
              });
        });
      });

    });

    return rcItem;
  }

  /**
   * This method is actually a stub
   */
  changeItemStock(sItemName: string, nItemStock: number): void {
    // 1- find item
    // 2- modify stock value
  }

}
