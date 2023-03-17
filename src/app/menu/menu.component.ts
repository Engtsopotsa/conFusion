import { Component, OnInit } from '@angular/core';

// import dish interface
import { Dish } from '../shared/dish';

// import dishes constant
import { DISHES } from '../shared/dishes';

// moved the dishes property into the constant

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  // hard coded dishes
  dishes: Dish[] = DISHES;
  selectedDish: Dish = {
    id: '',
    name: '',
    image: '',
    category: '',
    featured: false,
    label: '',
    price: '',
    description: '',
    comments: [],
  };

  onSelect(dish: Dish) {
    this.selectedDish = dish;
    console.log('Selected dish:', dish);
  }

  constructor() {}

  ngOnInit(): void {}
}
