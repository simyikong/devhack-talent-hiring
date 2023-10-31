import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements AfterViewInit {
  @ViewChild('scrollbar', { static: true }) scrollbar!: NgScrollbar;
  public navItems = navItems;

  constructor() {}

  ngAfterViewInit() {
    this.scrollbar.scrollTo({ top: 0 });
  }
}
