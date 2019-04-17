import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() {
    /**
     * rubric63
     * see also about-page.component.css
     */
    window.addEventListener('scroll', () => {
      const boxes = document.querySelectorAll('div[id^="claim-panel"]');

      for (let ix = 0; ix < boxes.length; ix++) {
        const box = document.getElementById(boxes[ix].id);
        const rect = box.getBoundingClientRect();

        if ((rect.top < -70) && (rect.top > -170)) {
          box.style.opacity = ((rect.top + 170) / 100).toString();
        } else if (rect.top <= -170) {
          box.style.opacity = '0';
        } else {
          box.style.opacity = '1'; // Default
        }
      }
    });
   }

  ngOnInit() {

  }

}
