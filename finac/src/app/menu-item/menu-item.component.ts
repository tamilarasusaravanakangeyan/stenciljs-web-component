import { Component, Input } from '@angular/core';
import { MenuItem } from '../interface/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
  @Input() toggle!: (item: MenuItem) => void;

  onToggle() {
    if (this.item.children) {
      this.toggle(this.item);
    }
  }
}
