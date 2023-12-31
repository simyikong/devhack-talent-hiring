import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { navItems } from '../_nav';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css'],
})
export class DefaultHeaderComponent extends HeaderComponent {
  public navItems = navItems;

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService) {
    super();
  }
}
