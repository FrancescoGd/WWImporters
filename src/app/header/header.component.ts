import { Component, OnInit, Input } from '@angular/core';

import { StatusService } from '../status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor(
    public appStatus: StatusService
  ) { }

  ngOnInit() {
  }

}
