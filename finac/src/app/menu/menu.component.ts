import { Component } from '@angular/core';
import { MenuItem } from '../interface/menu-item';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      title: 'Home',
      link: '/home'
    },
    {
      title: 'Products',
      children: [
        {
          title: 'Electronics',
          children: [
            { title: 'Mobile Phones', link: '/products/electronics/mobile-phones' },
            { title: 'Laptops', link: '/products/electronics/laptops' }
          ]
        },
        {
          title: 'Furniture',
          children: [
            { title: 'Chairs', link: '/products/furniture/chairs' },
            { title: 'Tables', link: '/products/furniture/tables' }
          ]
        }
      ]
    },
    {
      title: 'About Us',
      link: '/about'
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ];

  toggle(menuItem: MenuItem) {
    menuItem['expanded'] = !menuItem['expanded'];
  }

}

