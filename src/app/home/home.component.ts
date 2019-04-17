import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService, RsRecordset } from '../data.service';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  slides = [];
  bSlideshowEnabled = true;
  @ViewChild('homeSlideShow') homeSlideShow: any;

  constructor(private dataService: DataService, slideshowConfig: NgbCarouselConfig) {
    slideshowConfig.interval = 3000; // 3secs
  }

  ngOnInit() {
    this.getSlides();
  }

  /**
   * rubric01
   * The user should see a product carousel that contains at least 3 slides of products, with each slide
   * having between 1 and 4 product images.
   *
   * This method retrieves all the items from the supplied service then picks 4 random items to build
   * the slideshow upon.
   * NOTE: some of the product images are quite large so they take a while to show... this must be optimized a bit
   */
  getSlides() {
    this.dataService.getData()
    .subscribe(
      /**
       * Flatten the result to a simpler array
       */
      (result: RsRecordset[]) => {
        const tempArray = [];

        result.map(category => {

          return category.subcategories.map(subcats => {

              return subcats.items.map(subcatsitems => {
                tempArray.push(
                  { 'name': subcatsitems.name,
                    'description': subcatsitems.description,
                    'image': subcatsitems.imagelink
                  }
                );

              });

          });

        });

        /**
         * Take four random elements for the carousel...
         * NOTE: To simplify things for now this doesn't check anything and could potentially take duplicate elements
         */
        for (let numElements = 1; numElements <= 4; numElements++) {
          const ixRandomItem = Math.floor((Math.random() * tempArray.length) + 1);
          this.slides.push(tempArray[ixRandomItem]);
        }

      }
    );

  }

  /**
   * rubric10
   * If the “Toggle Slide Show” switch is checked, the product carousel should automatically move forward one slide every 3 seconds
   */
  toggleSlideShow() {
    this.bSlideshowEnabled = !this.bSlideshowEnabled;
    if (this.bSlideshowEnabled) {
      this.homeSlideShow.cycle();
    } else {
      this.homeSlideShow.pause();
    }
  }

}
